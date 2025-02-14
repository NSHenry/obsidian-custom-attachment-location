# CHANGELOG

## 4.9.2

- Fix options merging

## 4.9.1

- Fix related attachments notice

## 4.9.0

- Don't create fake file.

## 4.8.0

- Don't create duplicates when dragging vault files

## 4.7.0

- Skip paste handler in metadata editor

## 4.6.0

- Fix race condition

## 4.5.0

- Ensure `getAvailablePathForAttachments` creates missing folder

## 4.4.0

- Fix race conditions

## 4.3.3

- Bugfixes

## 4.3.2

- Fix double paste

## 4.3.1

- Create attachment folders on paste/drop

## 4.3.0

- Create attachment folder only when it is needed

## 4.2.1

- Fix build

## 4.2.0

- Add `Rename only images` setting

## 4.1.0

- Generate links exactly as Obsidian does

## 4.0.0

- Disable Obsidian's built-in way to update links
- Add commands and buttons to collect attachments

## 3.8.0

- Improve checks for target type

## 3.7.0

- Add `Rename pasted files with known names` setting

## 3.6.0

- Handle move, not only rename
- Add `Keep empty attachment folders` setting

## 3.5.0

- Preserve draggable on redrop

## 3.4.0

- Handle rename/delete for canvas

## 3.3.0

- Add `${foldername}` and `${folderPath}`

## 3.2.0

- Configure `Duplicate name separator`

## 3.1.0

- Add canvas support

## 3.0.0

- Don't modify `attachmentFolderPath` setting

## 2.1.0

- Configure drag&drop as paste behavior
- Remove extra dot before jpg
- Add support for `${prompt}`

## 2.0.0

- Make universal paste/drop

## 1.3.1

- Bugfixes

## 1.3.0

- Substitute `${originalCopiedFilename}`

## 1.2.0

- Bugfixes

## 1.1.0

- Bugfixes

## 1.0.3

- Remove unused attachment folder

## 1.0.2

- Forbid backslashes

## 1.0.1

- Add settings validation

## 1.0.0

- Fix README.md template example to prevent inappropriate latex rendering by @kaiiiz in https://github.com/RainCat1998/obsidian-custom-attachment-location/pull/28
- Handle pasting multiple images by @mnaoumov in https://github.com/RainCat1998/obsidian-custom-attachment-location/pull/58
- Support date var template(moment.js) in folder path & image name by @Harrd in https://github.com/RainCat1998/obsidian-custom-attachment-location/pull/56
- Add mobile support by @mengbo in https://github.com/RainCat1998/obsidian-custom-attachment-location/pull/44
- Add name sanitization when creating folder. by @EricWiener in https://github.com/RainCat1998/obsidian-custom-attachment-location/pull/35
- Feature: Compress images from png to jpeg while pasting from the clipboard by @kaiiiz in https://github.com/RainCat1998/obsidian-custom-attachment-location/pull/29

## 0.0.9

- Update attachment folder config when note renamed by @mnaoumov in https://github.com/RainCat1998/obsidian-custom-attachment-location/pull/26

## 0.0.8

- Move attachments when note is moved by @mnaoumov in https://github.com/RainCat1998/obsidian-custom-attachment-location/pull/21
- Make attachment folder setting modified every time file opens by @mnaoumov in https://github.com/RainCat1998/obsidian-custom-attachment-location/pull/23

## 0.0.7

- Fixed minor typo in the settings by @astrodad in https://github.com/RainCat1998/obsidian-custom-attachment-location/pull/10
- Temporarily fix Drag-n-Drop file from explorer doesn't copy file to obsidian vault.

## 0.0.6

- Add support for absolute path and relative path.
- Add options for auto renaming.

## 0.0.5

- Add support for drop event
- Fix typos & grammar by @TypicalHog in https://github.com/RainCat1998/obsidian-custom-attachment-location/pull/2

## 0.0.4

- Optimize code

## 0.0.3

- Add setting tabs and fix bugs.

## 0.0.2

- Add support for custom pasted image filename.

## 0.0.1

- Initial release
