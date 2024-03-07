import './styles.css'

interface Props {
    value: string
    teste?: string
}

const Title = (props: Props) => {
    return <h2 className="title">Titulo
     {props.value}
    </h2>

}

export default Title;