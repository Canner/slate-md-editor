// @flow
import {Mark, Range} from 'slate';
import type {Change, Text} from 'slate';
import trailingSpace from '../utils/trailingSpace';

export default function (options: any, currentTextNode: Text, matched: any, change: Change) {
  const matchedLength = matched[0].length;
  const reg = matched[1] === '***' ? /\*\*\*/ : matched[1]
  return change
    .deleteAtRange(Range.create({
      anchorKey: currentTextNode.key,
      focusKey: currentTextNode.key,
      anchorOffset: matched.index,
      focusOffset: matched.index + matchedLength
    }))
    .call(trailingSpace, currentTextNode, matched.index)
    .insertTextByKey(
      currentTextNode.key,
      matched.index,
      matched[0].trim().replace(new RegExp(reg, "g"), ""),
      [Mark.create({type: options.BOLD}), Mark.create({type: options.ITALIC})]
    )
    .call(trailingSpace, currentTextNode, matched.index)
}