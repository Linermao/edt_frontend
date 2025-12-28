import { useParams } from "react-router-dom";

export function ErrorPage() {
    const { code } = useParams<{ code: string }>();

    return <div>Error code: {code}</div>;
}
