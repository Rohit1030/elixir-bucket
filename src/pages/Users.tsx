import { MainLayout } from "components/Layout";
import MyTable from "components/MyTable";

export default function Users(){
    return (
        <MainLayout title="Users">
            <MyTable />
        </MainLayout>
    );
}