import { CopyBlock, dracula } from "react-code-blocks";
import styles from './style.module.css';

function CodeSnippet({
    language = "jsx",
    text,
    showLineNumbers = false,
    wrapLines = false,
    codeBlock = false
}) {

    return (
        <div className={styles.code_snippet}>
            <CopyBlock
                language={language}
                text={text}
                showLineNumbers={showLineNumbers}
                theme={dracula}
                wrapLines={wrapLines}
                codeBlock={codeBlock}
            />
        </div>
    )
}

export default CodeSnippet;
