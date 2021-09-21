import "./EmptyView.css";

interface EmptyViewProps {
	msg: string;
};

const EmptyView=(props: EmptyViewProps): JSX.Element=> {
    return (
        <div className="EmptyView">
            <h2 id="niceTitle2">{props.msg}</h2>
			<img alt ="empty view"src="https://media2.giphy.com/media/swhRkVYLJDrCE/giphy.gif?cid=ecf05e47zh9njc4uohd1gua33op3p61n33ba5l309hwbdioo&rid=giphy.gif&ct=g"/>
        </div>
    );
};

export default EmptyView;