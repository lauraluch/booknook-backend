// External Libraries
import React from "react";

// Components

// Styles
import {
  Container,
  DateContainer,
  ProfileData,
  TitleAndDescription,
  DetailsContainer,
} from "./styles";
import { Sheet } from "src/components/toolkit/Sheet";
import { Typography } from "src/components/toolkit/Typography";
import theme from "@globals/theme";
import { SheetStatus } from "@pages/Books/hooks/useBooks";
import { IUser } from "src/types/user/IUser";
import { formatDate } from "@utils/functions/format/date";
import UserPhotoSVG from "@assets/icons/users/UserPhoto";
import BookHeartSVG from "@assets/icons/users/BookHeart";
import CalendarHeartSVG from "@assets/icons/users/CalendarHeart";
import { Button } from "@components/buttons/Button";
import { TitledInput } from "@components/inputs/TitledInput";

interface Props {
  isOpen: boolean;
  status: SheetStatus;
  onOutsideClick: () => void;
  form: IUser;
  onFormChange: (key: keyof IUser, value: any) => void;
  onEditClick: () => void;
  onEditConfirm: () => Promise<void>;
}

export const SettingsSheet: React.FC<Props> = ({
  isOpen,
  status,
  onOutsideClick,
  form,
  onFormChange,
  onEditClick,
  onEditConfirm,
}) => {
  function renderButtonLabel() {
    if (status === SheetStatus.EDITING) return "Salvar alterações";
    return "Editar";
  }

  function getButtonFunction() {
    if (status === SheetStatus.EDITING) return onEditConfirm;
    return onEditClick;
  }

  function renderContent() {
    if (status === SheetStatus.EDITING) {
      return (
        <ProfileData>
          <UserPhotoSVG
            stroke={theme.colors.role.primary}
            fill={theme.colors.role.primaryLightest}
          />

          <DetailsContainer>
            <TitledInput
              value={form?.username}
              onChange={(v) => onFormChange("username", v)}
            />

            <TitledInput
              value={form?.biography}
              onChange={(v) => onFormChange("biography", v)}
            />
          </DetailsContainer>

          <DetailsContainer>
            <DateContainer>
              <BookHeartSVG />

              <Typography variant="b2" color={theme.colors.text.secondary}>
                Entrou em
              </Typography>

              <Typography variant="s2" color={theme.colors.text.primary}>
                {formatDate(form?.creationDate)}
              </Typography>
            </DateContainer>

            <DateContainer>
              <CalendarHeartSVG />

              <Typography variant="b2" color={theme.colors.text.secondary}>
                Aniversário em
              </Typography>

              <TitledInput
                value={form?.birthDate}
                onChange={(v) => onFormChange("birthDate", v)}
                type="date"
                max={"2024-01-01"}
                min={"1900-01-01"}
                width="10rem"
              />
            </DateContainer>
          </DetailsContainer>
        </ProfileData>
      );
    }

    return (
      <ProfileData>
        <UserPhotoSVG
          stroke={theme.colors.role.primary}
          fill={theme.colors.role.primaryLightest}
        />

        <DetailsContainer>
          <Typography variant="h4">{form?.username}</Typography>

          <Typography variant="s1" color={theme.colors.text.secondary}>
            {form?.biography}
          </Typography>
        </DetailsContainer>

        <DetailsContainer>
          <DateContainer>
            <BookHeartSVG />

            <Typography variant="b2" color={theme.colors.text.secondary}>
              Entrou em
            </Typography>

            <Typography variant="s2" color={theme.colors.text.primary}>
              {formatDate(form?.creationDate)}
            </Typography>
          </DateContainer>

          <DateContainer>
            <CalendarHeartSVG />

            <Typography variant="b2" color={theme.colors.text.secondary}>
              Aniversário em
            </Typography>

            <Typography variant="s2" color={theme.colors.text.primary}>
              {formatDate(form?.birthDate)}
            </Typography>
          </DateContainer>
        </DetailsContainer>
      </ProfileData>
    );
  }

  return (
    <Sheet isOpen={isOpen} onOutsideClick={onOutsideClick}>
      <Container>
        <TitleAndDescription>
          <Typography variant="h4">Configurações</Typography>

          <Typography variant="b2" color={theme.colors.text.secondary}>
            Visualize os dados do seu perfil.
          </Typography>
        </TitleAndDescription>

        {renderContent()}

        <Button
          label={renderButtonLabel()}
          onClick={getButtonFunction()}
          variant={status === SheetStatus.READING ? "tertiary" : "primary"}
        />
      </Container>
    </Sheet>
  );
};
