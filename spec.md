# Infinite Drill & Flashcard Engine

## Current State
- NCERT Content Browser page exists at `/ncert`
- Classes 1, 3, 5, 6, 9, 10, 11, 12 have partial content in `ncertContent.ts`
- Classes 2, 4, 7, 8 are completely missing (show "Soon")
- Each existing class has 1-5 chapters per subject — far fewer than the actual NCERT curriculum
- The UI infrastructure (ClassSelector, SubjectSelector, ChapterList, ChapterCard) is fully built and working

## Requested Changes (Diff)

### Add
- Full chapter lists for all 12 classes in `ncertContent.ts`
- Classes 2, 4, 7, 8 with their subjects and chapters
- Additional chapters for Classes 1, 3, 5, 6, 9, 10, 11, 12 to bring them closer to the actual NCERT curriculum
- Each chapter to include: 3 explanation paragraphs, 4 key concepts, 3-4 important terms

### Modify
- `ncertClasses` export array to include classes 2, 4, 7, 8
- `getSubjectsForClass` helper remains unchanged
- Add more subjects per class where currently missing (e.g., Hindi for Class 1)

### Remove
- Nothing removed

## Implementation Plan
1. Add Class 2 content (Mathematics, English, EVS) with 3+ chapters each
2. Add Class 4 content (Mathematics, English, EVS) with 3+ chapters each
3. Add Class 7 content (Science, Mathematics, Social Science, English) with 4+ chapters each
4. Add Class 8 content (Science, Mathematics, Social Science, English) with 4+ chapters each
5. Expand existing classes with more chapters to cover majority of NCERT curriculum
6. Update `ncertClasses` export to include all 12 classes
