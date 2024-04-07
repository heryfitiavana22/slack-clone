import classNames from 'classnames';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '../button/button';
import { Send } from '../icons/send';

export function RichTextEditor({
  value,
  setValue,
  placeholder = 'Envoyer un messsage...',
  className,
  onSubmit,
}: RichTextEditorProps) {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={classNames(
        'border p-2 rounded-lg',
        focus ? 'border-gray-400' : 'border-gray-200',
        className,
      )}
    >
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['code-block'],
          ],
        }}
        className="[&_.ql-snow]:!border-none"
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      />
      <div className="flex justify-end w-full">
        <Button
          variant="primary"
          size="sm"
          onClick={onSubmit}
          disabled={value.length == 0 || value == '<p><br></p>'}
        >
          <Send />
        </Button>
      </div>
    </div>
  );
}

type RichTextEditorProps = {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  className?: string;
  onSubmit: () => void;
};
