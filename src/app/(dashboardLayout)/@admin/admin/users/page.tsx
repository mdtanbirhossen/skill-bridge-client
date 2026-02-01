import UserList from "@/components/UserList";
import { adminService } from "@/services/admin.service";

const UsersListPage = async () => {
    const data = await adminService.getAllUsers();
    console.log(data)
    return (
        <div>
            <UserList users={data.data.data} />
        </div>
    );
};

export default UsersListPage;