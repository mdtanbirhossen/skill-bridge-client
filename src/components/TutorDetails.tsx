import { Tutor } from "@/types/tutor.types";
import { Star } from "lucide-react";
import BookSession from "./BookSession";

const TutorDetails = ({ tutor }: { tutor: Tutor }) => {
    console.log(tutor)
    return (
        <div className=" space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">{tutor.user.name}</h1>
                    <p className="text-gray-500">{tutor?.category?.name}</p>
                </div>

                <div className="text-right">
                    <p className="text-lg font-semibold flex items-center gap-1"><Star className="w-5 h-5 text-yellow-400" /> {tutor.rating.toFixed(1)}</p>
                    <p className="text-sm text-gray-500">
                        {tutor.experience} years experience
                    </p>
                </div>
            </div>

            {/* Bio */}
            <div>
                <h2 className="text-xl font-semibold mb-2">About</h2>
                <p className="text-gray-700 leading-relaxed">{tutor.bio}</p>
            </div>

            {/* Subjects */}
            <div>
                <h2 className="text-xl font-semibold mb-2">Subjects</h2>
                <div className="flex flex-wrap gap-2">
                    {tutor.subjects.map((subject) => (
                        <span
                            key={subject}
                            className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full"
                        >
                            {subject}
                        </span>
                    ))}
                </div>
            </div>

            {/* Availability */}
            {tutor.availability && tutor.availability.length > 0 && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Availability</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {tutor.availability.map((slot) => (
                            <div
                                key={slot.id}
                                className="border rounded-lg p-4 bg-gray-50"
                            >
                                <p className="font-semibold">{slot.day}</p>
                                <p className="text-sm text-gray-600">
                                    {slot.startTime} – {slot.endTime}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Pricing */}
            <div className="flex items-center justify-between border-t pt-6">
                <p className="text-lg font-semibold">
                    Hourly Rate:{" "}
                    <span className="text-purple-600">${tutor.hourlyRate}</span>
                </p>

                <BookSession tutorId={tutor.id} />
            </div>
            <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">
                    Reviews ({tutor.reviews?.length || 0})
                </h2>

                {tutor.reviews && tutor.reviews.length > 0 ? (
                    <div className="space-y-4">
                        {tutor.reviews.map((review) => (
                            <div
                                key={review.id}
                                className="border rounded-lg p-4 bg-gray-50"
                            >
                                {/* Rating */}
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, index) => (
                                        <Star
                                            key={index}
                                            className={`w-4 h-4 ${index < review.rating
                                                ? "text-yellow-400 fill-yellow-400"
                                                : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Comment */}
                                <p className="text-gray-700 mb-2">
                                    {review.comment || "No comment provided."}
                                </p>

                                {/* Date */}
                                <p className="text-sm text-gray-500">
                                    {new Date(review.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No reviews yet.</p>
                )}
            </div>
        </div>
    );
};

export default TutorDetails;
