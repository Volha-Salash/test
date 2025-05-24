import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../content/content.css';
import { randomTextGenerator } from "../../../consts/consts";
const Content = (props) => {
    const { titles, activeTab } = props;
    if (!titles)
        return null;
    return (_jsxs("div", { className: "content_menu", children: [_jsx("h2", { children: titles[activeTab] }), _jsx("p", { children: randomTextGenerator() })] }));
};
export default Content;
