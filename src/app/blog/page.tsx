"use client";

import BlogCoverCard from "@/components/blog/blog-cover";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { allBlogs } from "@/data/blogs";
import type { BlogPost } from "@/types";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function BlogPage() {
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	// Fetch posts on component mount
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const data = allBlogs;
				setPosts(data);
				setFilteredPosts(data);
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching blog posts:", error);
				setIsLoading(false);
			}
		};

		fetchPosts();
	}, []);

	// Filter posts based on search query
	useEffect(() => {
		if (!searchQuery.trim()) {
			setFilteredPosts(posts);
			return;
		}

		const query = searchQuery.toLowerCase();
		const filtered = posts.filter(
			(post) =>
				post.title.toLowerCase().includes(query) ||
				post.excerpt.toLowerCase().includes(query) ||
				post.tags.some((tag) => tag.toLowerCase().includes(query))
		);

		setFilteredPosts(filtered);
	}, [searchQuery, posts]);

	return (
		<div className="container mx-auto px-4 py-12">
			<div className="mb-8 space-y-4">
				<h1 className="text-3xl font-bold">Blog</h1>
				<p className="text-lg text-muted-foreground">
					Thoughts, tutorials, and insights on web development and
					tech
				</p>

				<div className="relative max-w-md">
					<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						placeholder="Search posts by title, content, or tags..."
						className="pl-8"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>
			</div>

			{isLoading ? (
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<Card key={i} className="overflow-hidden">
							<div className="h-48 w-full bg-muted animate-pulse" />
							<CardHeader>
								<div className="h-6 w-2/3 bg-muted animate-pulse rounded" />
								<div className="h-4 w-1/2 bg-muted animate-pulse rounded mt-2" />
							</CardHeader>
							<CardContent>
								<div className="space-y-2">
									<div className="h-4 w-full bg-muted animate-pulse rounded" />
									<div className="h-4 w-full bg-muted animate-pulse rounded" />
									<div className="h-4 w-2/3 bg-muted animate-pulse rounded" />
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			) : filteredPosts.length > 0 ? (
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{filteredPosts.map((post) => (
						<BlogCoverCard key={post.slug} post={post} />
					))}
				</div>
			) : (
				<div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12">
					<h3 className="text-lg font-medium">No posts found</h3>
					<p className="mt-2 text-sm text-muted-foreground">
						{searchQuery
							? `No posts matching "${searchQuery}"`
							: "No blog posts available yet"}
					</p>
					{searchQuery && (
						<Button
							variant="outline"
							onClick={() => setSearchQuery("")}
							className="mt-4"
						>
							Clear Search
						</Button>
					)}
				</div>
			)}
		</div>
	);
}
