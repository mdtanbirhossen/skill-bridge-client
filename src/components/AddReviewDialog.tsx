"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { bookingClientService } from "@/services/booking.client.service";
import { reviewClientService } from "@/services/review.client.service";
import { useRouter } from "next/navigation";

type AddReviewDialogProps = {
    tutorId: string;
    bookingId: string;
};

const AddReviewDialog = ({ tutorId, bookingId }: AddReviewDialogProps) => {
    const router = useRouter();
    const [rating, setRating] = useState<number>(0);
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);
      const [open, setOpen] = useState(false);

    const handleSubmitReview = async () => {
        if (rating < 1 || rating > 5) {
            toast.error("Please select a rating");
            return;
        }

        try {
            setLoading(true);

            const payload = {
                rating,
                comment,
                tutorId,
                bookingId,
            };

            const response = await reviewClientService.createReview(payload);

            if (!response.ok) {
                toast.error(response.message || "Failed to submit review");
                return;
            }

            toast.success(response.message || "Review submitted successfully");
            setOpen(false);
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Failed to submit review");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            
            <DialogTrigger asChild>
                <Button size="sm">Add Review</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add Your Review</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    {/* Rating */}
                    <div className="space-y-1">
                        <Label>Rating</Label>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <Star
                                    key={value}
                                    className={`cursor-pointer ${value <= rating
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-muted-foreground"
                                        }`}
                                    onClick={() => setRating(value)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Comment */}
                    <div className="space-y-1">
                        <Label>Comment (optional)</Label>
                        <Textarea
                            placeholder="Write your feedback..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>

                    <Button
                        className="w-full"
                        onClick={handleSubmitReview}
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit Review"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AddReviewDialog;
