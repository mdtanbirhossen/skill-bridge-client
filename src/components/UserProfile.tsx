import Image from "next/image";
import { User } from "@/types/user.types";
import { Badge } from "@/components/ui/badge";
import UserProfileUpdate from "./UserProfileUpdate";
import TutorProfileUpdate from "./TutorProfileUpdate";
import { Category } from "@/types/category.types";

const UserProfile = ({ user, categories }: { user: User, categories: Category[] }) => {
    return (
        <div className=" rounded-xl border bg-background p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Image
                    src={user.image || "/user.png"}
                    alt={user.name}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-full object-cover"
                />

                <div>
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p className="text-sm text-muted-foreground">{user.email}</p>

                    <div className="mt-2 flex gap-2">
                        <Badge
                            variant={
                                user.role === "ADMIN"
                                    ? "destructive"
                                    : user.role === "TUTOR"
                                        ? "default"
                                        : "secondary"
                            }
                        >
                            {user.role}
                        </Badge>

                        {user.isBanned && (
                            <Badge variant="outline" className="text-red-500">
                                Banned
                            </Badge>
                        )}
                    </div>
                </div>
            </div>

            {/* Info Section */}
            <div className="mt-6 grid grid-cols-1 gap-4 text-sm">
                <div>
                    <p className="text-muted-foreground">User ID</p>
                    <p className="font-medium">{user.id}</p>
                </div>

                {user.phone && (
                    <div>
                        <p className="text-muted-foreground">Phone</p>
                        <p className="font-medium">{user.phone}</p>
                    </div>
                )}

                <div>
                    <p className="text-muted-foreground">Joined</p>
                    <p className="font-medium">
                        {new Date(user.createdAt).toLocaleDateString()}
                    </p>
                </div>

                {user.updatedAt && (
                    <div>
                        <p className="text-muted-foreground">Last Updated</p>
                        <p className="font-medium">
                            {new Date(user.updatedAt).toLocaleDateString()}
                        </p>
                    </div>
                )}
                <UserProfileUpdate user={user} />
                {user.role === "TUTOR" && !user.tutorProfile && <TutorProfileUpdate tutor={user.tutorProfile} categories={categories} />}
            </div>

            {/* Tutor Info (if exists) */}
            {user.tutorProfile && (
                <div className="mt-6 rounded-lg border p-4">
                    <h3 className="mb-2 text-lg font-semibold">
                        Tutor Profile
                    </h3>

                    <div className="my-4 grid grid-cols-1 gap-4 text-sm">
                        <div>
                            <p className="text-muted-foreground">Subjects</p>
                            <p className="font-medium">{user.tutorProfile.subjects.join(", ")}</p>
                        </div>

                        <div>
                            <p className="text-muted-foreground">Category</p>
                            <p className="font-medium">{user.tutorProfile?.category?.name}</p>
                        </div>

                        <div>
                            <p className="text-muted-foreground">Hourly Rate</p>
                            <p className="font-medium">{user.tutorProfile.hourlyRate}</p>
                        </div>

                        <div>
                            <p className="text-muted-foreground">Experience</p>
                            <p className="font-medium">{user.tutorProfile.experience} years</p>
                        </div>
                    </div>
                    <TutorProfileUpdate tutor={user.tutorProfile} categories={categories} />
                </div>
            )}
        </div>
    );
};

export default UserProfile;
