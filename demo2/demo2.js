class HelloMessage extends React.DEPTH_COMPONENT{
    render() {
        return React.createElement(
            "div",
            null,
            "Hello",
            this.props.name
        );
    }
}
