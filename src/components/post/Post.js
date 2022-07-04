export default function Post({item,getPostId}) {
    return (<div>
        <h3 onClick={()=> {
            getPostId(item.id);
        }}>{item.title}</h3>


    </div>);
}