# notion-inline-latex
UserScript for Inline LaTeX Rendering in [notion.so](notion.so)

---

## Feature
- Render LaTeX at Startup (default two seconds latency for smoother experience but customizable)
- Render LaTeX at Keyup (default two seconds latency for smoother experience but customizable)
- `$ $` as Default LaTeX Delimiter (customizable)

## Acknowledgement
- Special thanks go to [Evert Heylen](https://github.com/evertheylen)!
- - This project is influenced and motivated by his initial project, [evertheylen/notion-inline-math](https://github.com/evertheylen/notion-inline-math).

## Attention (Please read this before proceeding.)
- Script is intended only for web browswer use with UserScript extension, [Violentmonkey](https://violentmonkey.github.io/).
- - The script should work with other UserScript extentions as it is or with minimum changes though it *has not* been tested yet.
- Script does not change the content.
- - It merely changes the display after the contents are loaded.
- For the script to work properly, you need at least one math block present in the page where you want to render inline LaTeX.
- This script is based on the script by Evert Heylen for my own math notes on [notion.so](notion.so).
- - I make it available for public so that it would be useful to others.
- - I meant no harm in writing this personal script.
- - I cannot take responsibility for loss of data or other harms.
- - So, even though the script only changes the display and it is harmless at my best knowledge, please use it at your own risk.
- Last but not least, this project/script is in no way affiliated nor sponsored by [notion.so](notion.so).
- - Like features on [Notion Hacks](https://www.notion.so/Notion-Hacks-27b92f71afcd4ae2ac9a4d14fef0ce47), this is a personal/community hack/workaround.

## Installation
- Install [Violentmonkey](https://violentmonkey.github.io/).
- Click on the extension icon and click plus icon. A new text editor window by extension will be opened in new tab.
- Copy/paste the script `notion-inline-latex.js`.
- Save and close the editor.
- Go to [notion.so](notion.so) and enable the script if it has not been already.

## Usage
- It should work on any [notion.so](notion.so) page automatically through extension as long as 
- - the script is enabled in extension, and 
- - there exists at least one math block in the page where you want to render inline LaTeX.
- If you have any usage question, you can ask me on either:
- - [Unofficial NotionHacks Discord](https://discordapp.com/invite/2RrqtF9), or
- - [Unofficial NotionHacks Slack](https://notionhacks.slack.com/join/shared_invite/enQtNDk4MTM3NzQ5NjE4LWVjYzg3ODhhYWIzY2I4NTE5ZDJjNmU2OTNlNDFmYzQwZTQ3YzdlMmZiMmZkOTNlYmJhNDUzMmIyZjFmZTEzZTg).

## Mobile Usage Idea
- Note: The workaround below has never been tested or tried out. Just an idea for those of you adventurous. Use with extreme caution!!!
- - Install a browser with plugin/extension support which has userscript plugin/extension available (For example, Opera with Tampermonkey).
- - Use the script with that plugin/extension.

## Example to Test
[Duplicatable Sample Notion Page](https://www.notion.so/penguinlay/notion-inline-latex-dc4c1e7a0bc146aa91a99a60c3db840a)

## Known Limitations
- You need at least one math block present in the page where you want to render inline LaTeX.
- Render at startup will not work when the page is loaded dynamically within Notion. Quick fix is just click a neutral key like shift for render at keyup to pick up the keyup cue.

## To-Do-List
- [ ] Figure out a way to eliminate the need for the presence of math block for the script to work.
- [ ] Figure out how to avoid cursor shifting to the beginning of the block after each render.

## Customization
- Small value for startUpWaitTime and keyUpWaitTime can make the script load improperly.
- Add delimiters as desired though delimiters other than default one have not been tested yet.

## Contribution
- Please start an issue if you find a bug or have any question.
- Please submit PR if you have any update to the project or would like to contribute. Thanks in advance!

## Reference
- [Official notion.so](notion.so)
- [Official Notion Documentation](https://www.notion.so/Notion-Official-83715d7703ee4b8699b5e659a4712dd8)
- [Notion Community](https://www.notion.so/Notion-Community-04f306fbf59a413fae15f42e2a1ab029)
- [Notion Hacks](https://www.notion.so/Notion-Hacks-27b92f71afcd4ae2ac9a4d14fef0ce47)
- [evertheylen/notion-inline-math](https://github.com/evertheylen/notion-inline-math)
- [Violentmonkey Metadata Block](https://violentmonkey.github.io/api/metadata-block/)
- [StackOverFlow Answer to "Run javascript function when user finishes typing instead of on key up?"](https://stackoverflow.com/a/4220182)
- [StackOverFlow Answer to "How can I render all inline formulas in $..$ with KaTeX?"](https://stackoverflow.com/a/45301641)
- [KaTeX Auto-render Extension](https://katex.org/docs/autorender.html)

---
