import { useSlate } from 'slate-react'
import { Stack, IconButton } from '@mui/material'
import { FormatBoldOutlined, FormatItalicOutlined, FormatUnderlinedOutlined, FormatQuoteOutlined, FormatListNumberedOutlined, FormatListBulletedOutlined, FormatAlignLeftOutlined, FormatAlignCenterOutlined, FormatAlignRightOutlined, FormatAlignJustify } from '@mui/icons-material'
import { isMarkActive, toggleMark, isBlockActive, toggleBlock, TEXT_ALIGN_TYPES } from '@/lib'

export const Toolbar = () => {
  const editor = useSlate()

  return (
    <Stack direction="row" alignItems="center" flexWrap="wrap">
      <IconButton
        onClick={() => {
          toggleMark(editor, "bold")
        }}
        aria-label="bold">
        <FormatBoldOutlined fontSize="small" color={isMarkActive(editor, "bold") ? "secondary" : "inherit"} />
      </IconButton>

      <IconButton
        aria-label="italic"
        onClick={() => toggleMark(editor, "italic")}
      >
        <FormatItalicOutlined fontSize="small" color={isMarkActive(editor, "italic") ? "secondary" : "inherit"} />
      </IconButton>


      <IconButton
        aria-label="underline"
        onClick={() => toggleMark(editor, "underline")}
      >
        <FormatUnderlinedOutlined fontSize="small" color={isMarkActive(editor, "underline") ? "secondary" : "inherit"} />
      </IconButton>


      <IconButton
        aria-label="quote"
        onClick={() => toggleBlock(editor, "block-quote")}
      >
        <FormatQuoteOutlined
          fontSize="small"
          color={
            (isBlockActive(
              editor,
              "block-quote",
              TEXT_ALIGN_TYPES.includes("block-quote") ? 'align' : 'type'
            ))
              ? "secondary"
              : "inherit"
          }
        />
      </IconButton>


      <IconButton
        aria-label="numbered-list"
        onClick={() => toggleBlock(editor, "numbered-list")}
      >
        <FormatListNumberedOutlined
          fontSize="small"
          color={
            (isBlockActive(
              editor,
              "numbered-list",
              TEXT_ALIGN_TYPES.includes("numbered-list") ? 'align' : 'type'
            ))
              ? "secondary"
              : "inherit"
          }
        />
      </IconButton>

      <IconButton
        aria-label="bulleted-list"
        onClick={() => toggleBlock(editor, "bulleted-list")}
      >
        <FormatListBulletedOutlined
          fontSize="small"
          color={
            (isBlockActive(
              editor,
              "bulleted-list",
              TEXT_ALIGN_TYPES.includes("bulleted-list") ? 'align' : 'type'
            ))
              ? "secondary"
              : "inherit"
          }
        />
      </IconButton>


      <IconButton
        aria-label="align-left"
        onClick={() => toggleBlock(editor, "left")}
      >
        <FormatAlignLeftOutlined
          fontSize="small"
          color={
            (isBlockActive(
              editor,
              "left",
              TEXT_ALIGN_TYPES.includes("left") ? 'align' : 'type'
            ))
              ? "secondary"
              : "inherit"
          }
        />
      </IconButton>


      <IconButton
        aria-label="align-center"
        onClick={() => toggleBlock(editor, "center")}
      >
        <FormatAlignCenterOutlined
          fontSize="small"
          color={
            (isBlockActive(
              editor,
              "center",
              TEXT_ALIGN_TYPES.includes("center") ? 'align' : 'type'
            ))
              ? "secondary"
              : "inherit"
          }
        />
      </IconButton>


      <IconButton
        aria-label="align-right"
        onClick={() => toggleBlock(editor, "right")}
      >
        <FormatAlignRightOutlined
          fontSize="small"
          color={
            (isBlockActive(
              editor,
              "right",
              TEXT_ALIGN_TYPES.includes("right") ? 'align' : 'type'
            ))
              ? "secondary"
              : "inherit"
          }
        />
      </IconButton>

      <IconButton
        aria-label="align-justify"
        onClick={() => toggleBlock(editor, "justify")}
      >
        <FormatAlignJustify
          fontSize="small"
          color={
            (isBlockActive(
              editor,
              "justify",
              TEXT_ALIGN_TYPES.includes("justify") ? 'align' : 'type'
            ))
              ? "secondary"
              : "inherit"
          }
        />
      </IconButton>


      {/* <IconButton aria-label="align-center">
        <FormatAlignCenterOutlined fontSize="small" />
      </IconButton>
      <IconButton aria-label="align-right">
        <FormatAlignRightOutlined fontSize="small" />
      </IconButton>
      <IconButton aria-label="align-justify">
        <FormatAlignJustify fontSize="small" />
      </IconButton> */}
    </Stack>
  )
}