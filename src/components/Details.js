import React from 'react'
import { Link } from "react-router-dom";

// company: "PRZ INGENIEROS"
// content: "Formación: *Administración, marketing y afines. Conocimientos básicos en SEO, SEM Facebook Ads, Google Ads, Google Analytics, WORDPRESS, email marketing. S/.1,025 al mes<br>De Indeed - Mon, 18 Apr 2022 00:34:30 GMT - Ver todo: <a href=\"https://pe.indeed.com/jobs?l=Lima%2C+Lima\">empleo en Lima, Lima</a>"
// contentSnippet: "Formación: *Administración, marketing y afines. Conocimientos básicos en SEO, SEM Facebook Ads, Google Ads, Google Analytics, WORDPRESS, email marketing. S/.1,025 al mes\nDe Indeed - Mon, 18 Apr 2022 00:34:30 GMT - Ver todo: empleo en Lima, Lima"
// link: "https://pe.indeed.com/ver-empleo?t=Asistente+marketing&c=PRZ+INGENIEROS&l=Lima,+Lima&jk=8de6b22745cb8ef1&rtk=1g0tdf6i6r078800&from=rss"
// location: "Lima, Lima"
// pubDate: "Mon, 18 Apr 2022 00:34:30 GMT"
// type: "indeed"

function Details({ 
    link,
    company, 
    recent, 
    featured, 
    position, 
    postedAt, 
    contract, 
    location,
    languages,
    tools,
    filter_f
 }) {
    function handleClick(skill){
        filter_f(skill)
    }

    const Skills = ({skill}) => (<div className="tag rounded-md p-1 px-2 m-2">
        <button onClick={() => handleClick(skill)}>
            {skill}
        </button>
        </div>)
        
    return (
        <>

        {/* <Link className="App-link" to={`/job/${company}`}> */}
        <a className="App-link" href={`${link}`}>
            <div className="flex-1 px-4 py-2">
                <div className="flex flex-grow">
                    <p className="mr-2 flex justify-center items-center">{company}</p>
                    {/* {recent ? <p className="tags new-tag rounded-xl px-2 p-1 mr-1">new</p> : null}
                    {featured ? <p className="tags new-tag rounded-xl px-2 p-1">featured</p> : null} */}
                </div>
                <p className="main-heading my-2">{position}</p>
                <div className="flex flex-grow">
                    <small className="text-gray-400">{postedAt}</small>
                    <small className="text-gray-400">{contract}</small>
                    <small className="text-gray-400">{location}</small>
                </div>
            </div>
        </a>

        
        {/* <div className="tags flex flex-1 justify-center items-end">
            {
                [...languages, ...tools].map( skill => <Skills skill={skill}key={skill} />)
            }
        </div> */}
        </>
    )
}

export default Details
