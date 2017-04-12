import React from 'react';
import API from '../utils/api';


class Popular extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount(){
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage(lang) {
        this.setState(function() {
            return {
                selectedLanguage: lang,
                repos: null
            }
        });

        API.fetchPopularRepos(lang).then(function(repos){
            // console.log(repos);
            this.setState(function() {
                return {
                    repos: repos
                }
            });
        }.bind(this));

    }

    render() {
        var languages = ['All','JavaScript','Ruby','Java','CSS','Python'];
        // console.log('Up HERE!', this);
        return (
            <div>
            <ul className="languages">
                {
                    languages.map(function (lang) {
                        // console.log('Down HERE!', this);
                        return (
                            <li 
                                style={lang === this.state.selectedLanguage ? { color: '#d0021b'} : null}
                                onClick = {this.updateLanguage.bind(null, lang)}
                                key={lang}>
                                {lang}
                            </li>
                        )
                    }, this)
                }
            </ul>
                {
                    !this.state.repos ? <p>Loading</p>:<RepoGrid repos={this.state.repos}/>
                }
                
            </div>
        )
    }
}

function RepoGrid (props) {
    return (
        <ul className='popular-list'>
            {props.repos.map(function(repo, index){
                return (
                    <li key={repo.name} className='popular-item'>
                        <div className='popular-rank'>
                            #{index+1}
                        </div>
                        <ul className='space-list-items'>
                            <li>
                                <img 
                                    className='avatar'
                                    src={repo.owner.avatar_url}
                                    alt={'Avatar for' + repo.owner.login}
                                />
                            </li>
                            <li><a href={repo.html_url}>{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

module.exports = Popular;