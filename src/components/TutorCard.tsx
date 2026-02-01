import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tutor } from "@/types/tutor.types";


export function TutorCard({ tutor }: { tutor: Tutor }) {
    return (
        <Card className="relative mx-auto w-full pt-0 gap-3">
            {/* Overlay */}
            <div className="absolute inset-0 z-30 aspect-video bg-black/35 rounded-t-xl" />
            <img
                src={tutor.user.image || "https://avatar.vercel.sh/tutor"}
                alt={tutor.user.name}
                className="relative z-20 aspect-video w-full object-cover brightness-60 dark:brightness-40 rounded-t-xl"
            />

            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    {tutor.user.name}
                    <div className="flex gap-1">
                        <span className="text-sm font-normal text-muted-foreground">
                            ${tutor.hourlyRate}/hr
                        </span>
                        <Badge variant="secondary">{tutor.category.name}</Badge>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="line-clamp-3">
                    {tutor.bio}
                </CardDescription>

                {/* Subjects */}
                <div className="mt-2 flex flex-wrap gap-2">
                    {tutor.subjects.map((subject) => (
                        <Badge key={subject} variant="outline">
                            {subject}
                        </Badge>
                    ))}
                </div>

                {/* Experience */}
                <p className="mt-2 text-sm text-muted-foreground">
                    {tutor.experience} years experience
                </p>
            </CardContent>
            <CardFooter>
                <Button size={"sm"} className="w-full ">View Tutor Profile</Button>
            </CardFooter>
        </Card>
    );
}
