import React, { useCallback, useState } from "react";
import { IconButton } from "./iconButton";
import { TextButton } from "./textButton";
import { Message, VoiceEngine } from "@/features/messages/messages";
import {
  KoeiroParam,
  PRESET_A,
  PRESET_B,
  PRESET_C,
  PRESET_D,
} from "@/features/constants/koeiroParam";
import { Link } from "./link";
import { ChatEngine } from "@/features/chat/chat";
import styles from "./settings.module.css";

const CHARACTER_SETTINGS_DISABLED = import.meta.env
  .VITE_CHARACTER_SETTINGS_DISABLED;

type Props = {
  chatEngine: ChatEngine;
  openAiKey: string;
  systemPrompt: string;
  chatLog: Message[];
  voiceEngine: VoiceEngine;
  koeiroParam: KoeiroParam;
  koeiromapKey: string;
  onClickClose: () => void;
  onChangeAiKey: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSystemPrompt: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeChatLog: (index: number, text: string) => void;
  onChangeKoeiroParam: (x: number, y: number) => void;
  onClickOpenVrmFile: () => void;
  onClickResetChatLog: () => void;
  onClickResetSystemPrompt: () => void;
  onChangeKoeiromapKey: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLoad: () => Promise<void>;
};
export const Settings = ({
  chatEngine,
  openAiKey,
  chatLog,
  systemPrompt,
  voiceEngine,
  koeiroParam,
  koeiromapKey,
  onClickClose,
  onChangeSystemPrompt,
  onChangeAiKey,
  onChangeChatLog,
  onChangeKoeiroParam,
  onClickOpenVrmFile,
  onClickResetChatLog,
  onClickResetSystemPrompt,
  onChangeKoeiromapKey,
  onLoad,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClickCloseButton = useCallback(async () => {
    setIsLoading(true);
    await onLoad();
    onClickClose();
    setIsLoading(false);
  }, [onClickClose, onLoad]);

  return (
    <div className={styles.overlay}>
      <div className={styles.closeButton}>
        <IconButton
          iconName="24/Close"
          isProcessing={false}
          onClick={handleClickCloseButton}
          disabled={isLoading}
        ></IconButton>
      </div>
      <div className={styles.scrollContainer}>
        <div className={styles.content}>
          <div className={styles.sectionTitle}>Overview</div>
          <div className={styles.subsectionTitle}>About VRoid</div>
          <div>
            <p>The 3D model used in this demo was created with VRoid.</p>
            <p>
              The VRoid project is a 3D business by Pixiv Inc. with the
              philosophy of "Make Creativities More Enjoyable"
            </p>
            <p>
              The world of "one person, one avatar" where everyone has their own
              unique 3D character model and can utilize that character for
              creative activities and communication. Our mission is to realize
              that future with the power of technology and creativity.
            </p>
            <Link url="https://vroid.com/en" label="Learn more" />
          </div>
          <div className={styles.subsectionTitle}>About Repository</div>
          <div className={styles.paragraph}>
            {CHARACTER_SETTINGS_DISABLED && (
              <p>
                In this demo, editing the Settings is disabled. To use a fully
                editable version of the application, please clone our public
                repository from GitHub and run it on your local machine.
              </p>
            )}
            <Link
              url={"https://github.com/pixiv/local-chat-vrm"}
              label="https://github.com/pixiv/local-chat-vrm"
            />
            <img
              alt="https://github.com/pixiv/ChatVRM"
              height={80}
              width={80}
              src={"./github-qr.svg"}
              className={styles.qrCode}
            />
          </div>
          <div className={styles.sectionTitle}>Settings</div>
          <div className={styles.sectionBlock}>
            <div className={styles.subsectionTitle}>3D model</div>
            <div className={styles.paragraph}>
              <TextButton
                onClick={onClickOpenVrmFile}
                disabled={CHARACTER_SETTINGS_DISABLED}
              >
                Open VRM File
              </TextButton>
            </div>
          </div>
          <div className={styles.sectionBlock}>
            <div className={styles.paragraph}>
              <div className={styles.subsectionTitle}>
                Character Settings (System Prompt)
              </div>
              <TextButton
                onClick={onClickResetSystemPrompt}
                disabled={CHARACTER_SETTINGS_DISABLED}
              >
                Reset Character Settings
              </TextButton>
            </div>

            <textarea
              value={systemPrompt}
              onChange={onChangeSystemPrompt}
              className={styles.textarea}
              disabled={CHARACTER_SETTINGS_DISABLED || isLoading}
            ></textarea>
          </div>
          {chatLog.length > 0 && (
            <div className={styles.sectionBlock}>
              <div>
                <div className={styles.subsectionTitle}>
                  Chat History
                </div>
                <TextButton onClick={onClickResetChatLog}>
                  Reset Chat History
                </TextButton>
              </div>
              <div className={styles.paragraph}>
                {chatLog.map((value, index) => {
                  return (
                    <div key={index} className={styles.chatHistoryItem}>
                      <div className={styles.chatHistoryRole}>
                        {value.role === "assistant" ? "Character" : "You"}
                      </div>
                      <input
                        key={index}
                        className={styles.chatHistoryInput}
                        type="text"
                        value={value.content}
                        onChange={(event) => {
                          onChangeChatLog(index, event.target.value);
                        }}
                      ></input>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
