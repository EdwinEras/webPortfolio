"use client"
import { useEffect, useState } from "react";
import ListProject from "../components/list_project";
import axios from "axios";

export default function Page(){
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        (() => {
            axios.get("https://api.github.com/users/EdwinEras/repos", {
                headers: {
                    Authorization: process.env.GITHUB_AUTH,
                },
            })
            .then((response) => {
                setRepos(response.data);
            })
            .catch((error) => {
                alert("error fetching data:" + error);
            });
        })();
    }, []);

    return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
                    Projects page
                </h2>
            </div>
        </div>
        <div className="size-full my-10">
            {repos.map((item:any) => (
                <ListProject key={item.id}
                    id={item.id}
                    html_url={item.html_url}
                    pname={item.name}
                    updated_at={item.updated_at}
                    created_at={item.created_at}
                    language={item.language}
                    visibility={item.visibility}
                />
            ))}
        </div>
    </div>
)};