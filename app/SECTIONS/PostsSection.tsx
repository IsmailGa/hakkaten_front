"use client"
import React, { useState } from 'react';
import { posts } from '@/data/posts';
import { LikeIcon } from '@/public/icons';

const PostsSection = () => {
    const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

    const handleLike = (postId: string) => {
        setLikedPosts(prev => {
            const newSet = new Set(prev);
            if (newSet.has(postId)) {
                newSet.delete(postId);
            } else {
                newSet.add(postId);
            }
            return newSet;
        });
    };

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }).format(date);
    };
    return (
        <div className="flex flex-col ">
            <div className="mt-[15px] ml-[20px] flex self-start items-center justify-center rounded-[45px] h-[45px] px-[15px] min-w-[111px] gap-[25px] dark:text-[#DADADA] text-[black] dark:bg-[#2D2C2C]">
                New
                {/* ARROW DOWn */}
                <div className="relative block">
                    <span className="border-[1px] w-[12px] rounded-[20px] absolute -translate-x-[55%] right-[50%] top-[50%] translate-y-[-50%] rotate-[50deg]  bg-[#9B9C9C]"></span>
                    <span className="border-[1px] w-[12px] rounded-[20px] absolute translate-x-[0%] right-[50%] top-[50%] translate-y-[-50%] rotate-[130deg]  bg-[#9B9C9C]"></span>
                </div>
            </div>
            <div className="px-[25px] mt-[15px]">
                {posts.map((item) => {
                    const isActive = likedPosts.has(item.id);
                    const formattedDate = formatDate(item.date);

                    return (
                        <div key={item.title} className="p-[20px] flex flex-col justify-between dark:bg-dark_theme_bg w-full rounded-[20px] w-full mb-4">
                            <div className="flex flex-col gap-[15px] w-full">
                                <div className="flex">
                                    <div className="flex flex-col w-full gap-[5px]">
                                        <div className="flex items-center gap-[10px]">
                                            {/* Tags */}
                                            {item.tags.map((tag, index) => (
                                                <div key={index} className="flex items-center px-[10px] py-[1px] gap-[5px] dark:text-white bg-[#9B9C9C15] rounded-[25px]">
                                                    <span>#</span>
                                                    <p>{tag}</p>
                                                </div>
                                            ))}
                                            {/* Formatted Date */}
                                            <span className="text-sm dark:text-[#DADADA]">
                                                {formattedDate}
                                            </span>
                                        </div>
                                        {/* Post Content */}
                                        <h2 className="text-[25px] font-bold dark:text-white leading-[34px]">
                                            {item.title}
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-300 line-clamp-4 max-w-[417px] leading-[25px]">
                                            {item.descr}
                                        </p>
                                    </div>
                                    {/* IMAGE CONTENT */}
                                    <div className="max-w-[166px] h-[172px] w-full bg-gray-500 rounded-[10px]"></div>
                                </div>
                                {/* TEXT CONTENT */}

                                {/* LIKES COMMENTS CONTENT */}
                                <div className="flex justify-between w-full">
                                    {/* LIKE BUTTON */}
                                    <div className="flex items-center gap-[5px] cursor-pointer select-none text-white" onClick={() => handleLike(item.id)}>
                                        <LikeIcon
                                            isActive={isActive}

                                        />
                                        {item.likes}
                                    </div>
                                    {/* COMMENT BUTTON */}
                                    <div className=""></div>
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    );

};

export default PostsSection;
