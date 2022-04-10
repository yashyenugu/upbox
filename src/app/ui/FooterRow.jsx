const FooterRow = ({heading, items}) => {
    return (
        <div>
            <h4 className="text-xl font-bold">{heading}</h4>
            <ul>
                {items.map(item => (
                    <li className="text-sm font-medium tracking-medium my-2">
                        <a href="/">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterRow;