import { adminService } from "@/services/admin.service";

const UsersListPage = async () => {
    const data = await adminService.getAllUsers();
    console.log(data)
    return (
        <div>
            this is admin users list UsersListPage
        </div>
    );
};

export default UsersListPage;