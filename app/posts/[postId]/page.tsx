import getFormatedDate from "@/lib/getFormatedDate"
import { getPostData, getSortedPostData } from "@/lib/posts"
import Link from "next/link"
import { notFound } from 'next/navigation'

export function generateStaticParams() {
    const posts = getSortedPostData()

    return posts.map(post => ({
        postId: post.id
    }))
}


export function generateMetadata({ params }: { params: { postId: string }}) {
    const posts = getSortedPostData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post?.title,
    }
}



export default async function Post({ params }: { params: { postId: string }}) {
    const posts = getSortedPostData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const { title, date, contentHtml } = await getPostData(postId)
    const publicationDate = getFormatedDate(date)

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
        <h1 className="text-3xl mt-4 mb-0">{title}</h1>
        <p className="mt-0">
            {publicationDate}
        </p>
        <article>
            <section dangerouslySetInnerHTML={{ __html: contentHtml}} />
            <p>
                <Link href="/">Back to Home</Link>
            </p>
        </article>
    </main>
  )
}
