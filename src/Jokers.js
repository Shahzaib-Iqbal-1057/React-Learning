const Jokes = (props) =>
{
    return (
        <div>
            {props.setup} {props.punchline}
            <hr/>
        </div>
    )
}
export default Jokes;