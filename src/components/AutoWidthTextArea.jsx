import { useRef } from "react";
import { useEffect } from "react";

function setWidth(input) {
  const span = document.createElement('span');
  const styles = window.getComputedStyle(input);
  span.style.font = styles.font;
  span.style.fontSize = styles.fontSize;
  span.style.fontFamily = styles.fontFamily;
  span.style.fontWeight = styles.fontWeight;
  span.style.letterSpacing = styles.letterSpacing;
  span.style.visibility = 'hidden';
  span.style.position = 'absolute';
  span.style.whiteSpace = 'pre';
  span.textContent = input.value || input.placeholder || '';
  document.body.appendChild(span);
  input.style.width = span.offsetWidth < 1000 ? span.offsetWidth + 'px' : '1000px';
  document.body.removeChild(span);
}

export function AutoWidthTextArea({ ...props }) {
  const TextAreaRef = useRef(null);

  useEffect(() => {
    if (TextAreaRef.current) setWidth(TextAreaRef.current);
  }, [props.value]);

  return (
    <>
      <textarea className="textarea-field" ref={TextAreaRef} {...props} >
        {props.value || ''}
      </textarea>
    </>
  );
}
