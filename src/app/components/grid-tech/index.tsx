'ue client';
import React from 'react';
import content from "../../content.json";
import Image from 'next/image';
import InfiniteBanner from '../infinite-banner';

const GridTech = () => {
    return(
        <div>
            <div>
            <h2 className="text-2xl/7 font-bold sm:truncate sm:text-2xl sm:tracking-tight py-2">
                "Future-ready technologies in today’s projects"
            </h2>

            <InfiniteBanner item_list={content.home.languages.concat(content.home.databases)} orientation="left" />
            <InfiniteBanner item_list={content.home.frameworks.concat(content.home.webtech)} orientation="right" />

        </div>
        </div>
    );
}

export default GridTech;
