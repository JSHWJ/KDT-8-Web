import { useOutletContext } from 'react-router-dom';

export default function Comment() {
    const { comment } = useOutletContext();
    console.log(comment);

    // const ctx = useOutletContext();
    // console.log('ctx3', ctx);

    return (
        <div>
            {comment.map((value, idx) => {
                return <div key={idx}>{value.text}</div>;
            })}
        </div>
    );
}
