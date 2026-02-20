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
  input.style.width = span.offsetWidth < 760 ? span.offsetWidth + 'px' : '760px';
  document.body.removeChild(span);
}

export function AutoWidthInput({ ...props }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) setWidth(inputRef.current);
  }, [props.value]);

  return (
    <input className="input-field" ref={inputRef} {...props} value={props.value || ''} />
  );
}
