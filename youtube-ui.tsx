'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal } from 'lucide-react'

export default function Component() {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=480&width=640"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold mt-4">Exploring the Future of AI: Innovations and Challenges</h1>
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm text-gray-500">1,234,567 views • Oct 1, 2023</p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="w-4 h-4 mr-2" />
                123K
              </Button>
              <Button variant="ghost" size="sm">
                <ThumbsDown className="w-4 h-4 mr-2" />
                Dislike
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 pb-4 border-b">
            <div className="flex items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Channel avatar" />
                <AvatarFallback>CH</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="font-semibold">AI Insights Channel</p>
                <p className="text-sm text-gray-500">1.23M subscribers</p>
              </div>
            </div>
            <Button>Subscribe</Button>
          </div>
          <div className="mt-4">
            <p className={`text-sm ${isDescriptionExpanded ? '' : 'line-clamp-2'}`}>
              In this video, we delve into the cutting-edge advancements in Artificial Intelligence, exploring how AI is reshaping industries and our daily lives. We discuss the latest breakthroughs in machine learning, natural language processing, and computer vision, while also addressing the ethical considerations and challenges that come with these powerful technologies. Join us as we unpack the complexities of AI and its potential to revolutionize the future.
            </p>
            <button
              className="text-sm text-blue-600 mt-2"
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            >
              {isDescriptionExpanded ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>
        <div className="lg:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Related Videos</h2>
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="flex mb-4">
              <div className="flex-shrink-0 w-40 h-24 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={`/placeholder.svg?height=90&width=160`}
                  alt={`Related video thumbnail ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-semibold line-clamp-2">AI in Healthcare: Revolutionizing Patient Care</h3>
                <p className="text-xs text-gray-500 mt-1">MedTech Insights</p>
                <p className="text-xs text-gray-500">857K views • 3 weeks ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}