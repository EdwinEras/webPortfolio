import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { JSX } from "react";

const ListProject = ({
        id,
        pname,
        html_url,
        updated_at,
        created_at,
        language,
        visibility
    }: {
        id: number,
        pname: string,
        html_url: string,
        updated_at: string,
        created_at: string,
        language: string,
        visibility: string
    }): JSX.Element => {
    return (
      <div className="rounded overflow-hidden shadow-lg bg-white px-10 py-2">
        <ul role="list" className="divide-y divide-solid">
            <li key={id} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img alt="github_avatar"
                src={"https://avatars.githubusercontent.com/u/59517455?v=4"} 
                className="size-12 flex-none rounded-full bg-gray-50" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm/6 font-semibold text-gray-900">{pname}</p>
                  <p className="text-sm/6 text-gray-900">Language {language}</p>
                  <Link className="mt-1 truncate text-xs/5 text-gray-500" href={html_url}>
                    <button className="rounded-full bg-gray-800">
                      <p className="text-white px-2 py-2">Open Repository</p>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="mt-1 text-xs/5 text-gray-500">
                  Created at <time dateTime={created_at}>{created_at.split("T")[0]}</time>
                </p>
                <p className="mt-1 text-xs/5 text-gray-500">
                  Updated at <time dateTime={updated_at}>{updated_at.split("T")[0]}</time>
                </p>
                <p className="mt-1 text-xs/5 text-gray-500">
                  Visibility {visibility}
                </p>
              </div>
            </li>
        </ul>
      </div>
    )
  }

export default ListProject;