import React, { useCallback, useMemo } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact, RenderElementProps, RenderLeafProps } from 'slate-react'
import { withHistory } from 'slate-history'
import isHotkey from 'is-hotkey'
import { Divider } from '@mui/material'

import { Toolbar } from './Toolbar'
import { RenderElement } from './RenderElement'
import { RenderLeaf } from './RenderLeaf'
import { toggleMark } from '@/lib/slate'
import { HOTKEYS } from '@/lib'


// TODO: Add padding in the textarea
// TODO: Move the editor value to a global state
export const SlateApp = () => {
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])
    const renderElement = useCallback((props: RenderElementProps) => <RenderElement {...props} />, [])
    const renderLeaf = useCallback((props: RenderLeafProps) => <RenderLeaf {...props} />, [])

    return (
        <Slate
            editor={editor}
            initialValue={[
                {
                    type: 'paragraph',
                    children: [{ text: '' }]
                }
            ]}
            onChange={value => {
                const isAstChange = editor.operations.some(
                    op => 'set_selection' !== op.type
                )
                if (isAstChange) {
                    // Save the value to Local Storage.
                    console.log(value)
                    // const content = JSON.stringify(value)
                    // localStorage.setItem('content', content)
                }
            }}
        >
            <Toolbar />
            <Divider sx={{ my: 2 }} />
            <Editable
                style={{ minHeight: "calc(100vh - (80px + 120px))", maxHeight: "auto" }}
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                spellCheck
                placeholder="Inicia a escribir la noticia aquí..."
                onKeyDown={event => {
                    for (const hotkey in HOTKEYS) {
                        const flag = isHotkey(hotkey, event as any)
                        if (flag) {
                            event.preventDefault()
                            const mark = HOTKEYS[hotkey as keyof typeof flag]
                            toggleMark(editor, mark)
                        }
                    }
                }}
            />
        </Slate>
    )
}
