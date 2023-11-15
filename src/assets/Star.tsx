type StarProps = {
    height: string
    width: string
    fill: string
}

const Star = (props: StarProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={props.height}
            width={props.width}
            fill={props.fill}
            viewBox="0 -960 960 960"
        >
            <path
                d="m323-205 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-355Z" />
        </svg>
    );
};

export default Star;