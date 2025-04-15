export const selectSectionCount = (rootReducer) => {
    return rootReducer.sectionReducer.sections.length;
}