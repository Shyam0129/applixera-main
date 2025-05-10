
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number;
  imgSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  rating = 5,
  imgSrc,
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        {/* Rating Stars */}
        {rating > 0 && (
          <div className="flex mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
              />
            ))}
          </div>
        )}
        
        {/* Quote */}
        <blockquote className="text-base md:text-lg text-gray-700 mb-6">
          "{quote}"
        </blockquote>
        
        {/* Author Info */}
        <div className="flex items-center">
          {imgSrc && (
            <div className="mr-4">
              <img
                src={imgSrc}
                alt={author}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <div className="font-medium text-gray-900">{author}</div>
            <div className="text-sm text-gray-500">
              {role}{company ? `, ${company}` : ""}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
