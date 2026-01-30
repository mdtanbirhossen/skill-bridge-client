
import { userService } from "@/services/user.service";


export default async function HomePage() {
  const data = await userService.getSession()
  console.log(data)
  return (
    <div className="">
      this is home page
    </div>
  );
}
