import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { User } from "@/types/user.types";
import UserBanSelect from "./UserBanSelect";
import UserRoleSelect from "./UserRoleSelect";

interface UserListProps {
    users: User[];
}

const UserList = ({ users }: UserListProps) => {
    return (
        <div className="p-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Serial No</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Is Banned</TableHead>
                        <TableHead>Created At</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {users.map((user, index) => (
                        <TableRow key={user.id}>
                            {/* User info */}
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    {user.image ? (
                                        <Image
                                            src={user.image}
                                            alt={user.name}
                                            width={36}
                                            height={36}
                                            className="rounded-full h-9 w-9 object-cover"
                                        />
                                    ) : (<Image
                                        src={'/user.png'}
                                        alt={user.name}
                                        width={36}
                                        height={36}
                                        className="rounded-full h-9 w-9 object-cover"
                                    />)}
                                    <div>
                                        <p className="font-medium">{user.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {user.id.slice(0, 8)}...
                                        </p>
                                    </div>
                                </div>
                            </TableCell>

                            {/* Email */}
                            <TableCell>{user.email}</TableCell>

                            {/* Role */}
                            <TableCell>
                                <UserRoleSelect
                                    userId={user.id}
                                    role={user.role}
                                />
                            </TableCell>


                            <TableCell>
                                <UserBanSelect
                                    userId={user.id}
                                    isBanned={user.isBanned as boolean}
                                />
                            </TableCell>

                            {/* Created date */}
                            <TableCell>
                                {new Date(user.createdAt).toLocaleDateString()}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default UserList;
