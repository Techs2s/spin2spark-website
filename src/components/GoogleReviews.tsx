
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  id: string;
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
}

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock reviews for demonstration - Replace with actual Google Places API call
  const mockReviews: Review[] = [
    {
      id: "1",
      author_name: "Sarah Johnson",
      rating: 5,
      text: "Excellent service! My clothes came back perfectly cleaned and pressed. The pickup and delivery service is so convenient.",
      time: Date.now() - 86400000,
      profile_photo_url: "https://images.unsplash.com/photo-1494790108755-2616b612b1fe?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: "2",
      author_name: "Mike Chen",
      rating: 5,
      text: "Best laundry service in the city! They removed a stubborn stain that I thought was impossible to get out. Highly recommended!",
      time: Date.now() - 172800000,
      profile_photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: "3",
      author_name: "Emily Rodriguez",
      rating: 5,
      text: "Professional, reliable, and affordable. I've been using Spin2Spark for over a year and they never disappoint.",
      time: Date.now() - 259200000,
      profile_photo_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: "4",
      author_name: "David Kim",
      rating: 4,
      text: "Great quality cleaning and very punctual with pickup and delivery. Will definitely use again!",
      time: Date.now() - 345600000,
      profile_photo_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchReviews = async () => {
      try {
        setLoading(true);
        // In a real implementation, you would call the Google Places API here
        // const response = await fetch(`/api/google-reviews`);
        // const data = await response.json();
        
        // For now, using mock data
        setTimeout(() => {
          setReviews(mockReviews);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to load reviews");
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading reviews...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : "0";

  return (
    <div className="space-y-6">
      {/* Header with average rating */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="flex">
            {renderStars(Math.round(parseFloat(averageRating)))}
          </div>
          <span className="text-2xl font-bold text-gray-900">{averageRating}</span>
          <span className="text-gray-600">({reviews.length} reviews)</span>
        </div>
        <p className="text-lg text-gray-600">Based on Google Reviews</p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <Card key={review.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                {review.profile_photo_url && (
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div className="flex-1">
                  <CardTitle className="text-sm font-semibold text-gray-900">
                    {review.author_name}
                  </CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-xs text-gray-500">
                      {formatDate(review.time)}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Google Reviews Link */}
      <div className="text-center pt-4">
        <a
          href="https://www.google.com/search?q=spin2spark+laundry+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          View all reviews on Google
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default GoogleReviews;
