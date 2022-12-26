import CodeSnippet from "../Snippets";
import { codes } from "./code";

function Demo() {
    return (
        <section>
            {
                codes.map(({ language, text }) => (
                    <CodeSnippet
                        key={language}
                        language={language}
                        text={text.trim()}
                        showLineNumbers={true}
                        wrapLines={true}
                        codeBlock={true}
                    />
                ))
            }
        </section>

    )
}

export default Demo;
