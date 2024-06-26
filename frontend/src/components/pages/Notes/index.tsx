// External Libraries
import React from "react";

// Components

// Styles
import {
  NotesContainer,
  Container,
  CreateNoteButton,
  Header,
  HeaderButton,
  HeaderItems,
  Title,
} from "./styles";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";
import AddSVG from "@assets/icons/buttons/Add";
import SmallShineSVG from "@assets/icons/SmallShine";
import TagSVG from "@assets/icons/header/Tag";
import { useNotes } from "./hooks/useNotes";
import { ListEntry } from "./components/ListEntry";
import { mapEntryFromBackend } from "src/types/entry/utils";
import { NoteSheet } from "./components/NoteSheet";
import { SheetStatus } from "@pages/Books/hooks/useBooks";
import { useRouter } from "next/router";
import { BodyContainer } from "@pages/Books/styles";

interface Props {
  // Props
}

export const Notes: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  const { push } = useRouter();
  const {
    notes,
    noteForm,
    handleFormChange,
    handleCreateNote,
    isOpen,
    loading,
    sheetStatus,
    handleOutsideClick,
    checkIfButtonIsDisabled,
    handleCreateClick,
    handleNoteClick,
    handleEditClick,
    handleEditConfirm,
    handleDeleteNote,
    modalRef,
  } = useNotes();

  function getButtonFunction() {
    if (sheetStatus === SheetStatus.CREATING) return handleCreateNote;
    else if (sheetStatus === SheetStatus.READING) return handleEditClick;
    return handleEditConfirm;
  }

  return (
    <Container>
      <Header>
        <Title onClick={() => push(`/`)}>
          <Typography variant="h2" color={theme.colors.text.primary}>
            booknook
          </Typography>

          <SmallShineSVG />
        </Title>
      </Header>

      <BodyContainer>
        <Typography variant="h6" color={theme.colors.text.primary}>
          Notas do livro
        </Typography>

        <NotesContainer>
          {notes?.map((entry) => (
            <ListEntry
              entry={mapEntryFromBackend(entry)}
              onClick={handleNoteClick}
            />
          ))}
        </NotesContainer>
      </BodyContainer>

      <CreateNoteButton onClick={handleCreateClick}>
        <AddSVG stroke={theme.colors.layout.white} />
      </CreateNoteButton>

      <NoteSheet
        isOpen={isOpen}
        status={sheetStatus}
        onOutsideClick={handleOutsideClick}
        noteForm={noteForm}
        onChangeForm={handleFormChange}
        onConfirm={getButtonFunction()}
        isLoading={loading}
        isButtonDisabled={checkIfButtonIsDisabled()}
        modalRef={modalRef}
        onDeleteConfirm={handleDeleteNote}
      />
    </Container>
  );
};
