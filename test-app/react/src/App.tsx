import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  DodamProvider,
  // Buttons
  DodamFilledButton,
  DodamContentButton,
  // Typography
  DodamHeading1,
  DodamHeading2,
  DodamBody1,
  DodamBody2,
  DodamCaption1,
  DodamTitle1,
  DodamLabel,
  // Form
  DodamTextField,
  DodamFilledTextField,
  DodamCheckBox,
  // Layout
  DodamModal,
  DodamDialog,
  DodamNavBar,
  // Other
  DodamTag,
  DodamDivider,
  // Types
  ETheme,
} from 'dds-web-test';

// Icons
import { Bell, School, ArrowUp, ChevronUp } from 'dds-web-test/icons';

const queryClient = new QueryClient();

function TestComponents() {
  const [isDark, setIsDark] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [textValue, setTextValue] = useState('');

  const theme = isDark ? "DARK" : "LIGHT";

  const handleShowAlert = () => {
    DodamDialog.alert('테스트 알림 메시지');
  };

  const handleShowConfirm = async () => {
    const result = await DodamDialog.confirm('확인하시겠습니까?');
    if (result) {
      alert('확인됨!');
    }
  };

  return (
    <DodamProvider theme={theme}>
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <DodamHeading1 text="DDS Component Test - React" fontScale="Bold" />

        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <DodamBody1 text="Theme:" fontScale="Medium" />
          <DodamFilledButton
            text={isDark ? 'Switch to Light' : 'Switch to Dark'}
            size="Medium"
            onClick={() => setIsDark(!isDark)}
          />
        </div>

        <DodamDivider type="Large" />

        {/* Buttons Section */}
        <section style={{ marginTop: '30px' }}>
          <DodamHeading2 text="Buttons" fontScale="Bold" />
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
            <DodamFilledButton text="Filled Button" size="Large" />
            <DodamFilledButton text="Medium Button" size="Medium" />
            <DodamFilledButton text="Small Button" size="Small" />
            <DodamContentButton
              textTheme="labelNormal"
              onClick={() => alert('Content button clicked')}
            >
              Content Button
            </DodamContentButton>
          </div>
        </section>

        <DodamDivider type="Large" />

        {/* Form Section */}
        <section style={{ marginTop: '30px' }}>
          <DodamHeading2 text="Form Components" fontScale="Bold" />
          <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
            <DodamTextField
              id="text-field-1"
              name="textField"
              type="text"
              label="Text Field"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            />
            <DodamFilledTextField
              type="text"
              label="Filled Text Field"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              placeholder="Enter text..."
            />
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <DodamCheckBox
                isDisabled={false}
                onClick={() => setChecked(!checked)}
              />
              <DodamBody1 text={`Checkbox ${checked ? '(Checked)' : '(Unchecked)'}`} fontScale="Regular" />
            </div>
          </div>
        </section>

        <DodamDivider type="Large" />

        {/* Typography Section */}
        <section style={{ marginTop: '30px' }}>
          <DodamHeading2 text="Typography" fontScale="Bold" />
          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <DodamHeading1 text="Heading 1" fontScale="Bold" />
            <DodamHeading2 text="Heading 2" fontScale="Medium" />
            <DodamTitle1 text="Title 1" fontScale="Bold" />
            <DodamBody1 text="Body 1 - Regular text content" fontScale="Regular" />
            <DodamBody2 text="Body 2 - Smaller text content" fontScale="Regular" />
            <DodamCaption1 text="Caption 1" fontScale="Regular" />
            <DodamLabel text="Label Text" fontScale="Medium" />
          </div>
        </section>

        <DodamDivider type="Large" />

        {/* Icons Section */}
        <section style={{ marginTop: '30px' }}>
          <DodamHeading2 text="Icons" fontScale="Bold" />
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
              <Bell size={32} />
              <DodamCaption1 text="Bell" fontScale="Regular" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
              <School size={32} />
              <DodamCaption1 text="School" fontScale="Regular" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
              <ArrowUp size={32} />
              <DodamCaption1 text="ArrowUp" fontScale="Regular" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
              <ChevronUp size={32} />
              <DodamCaption1 text="ChevronUp" fontScale="Regular" />
            </div>
          </div>
        </section>

        <DodamDivider type="Large" />

        {/* Modal & Dialog Section */}
        <section style={{ marginTop: '30px' }}>
          <DodamHeading2 text="Modal & Dialog" fontScale="Bold" />
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <DodamFilledButton
              text="Open Modal"
              size="Medium"
              onClick={() => setModalOpen(true)}
            />
            <DodamFilledButton
              text="Show Alert"
              size="Medium"
              onClick={handleShowAlert}
            />
            <DodamFilledButton
              text="Show Confirm"
              size="Medium"
              onClick={handleShowConfirm}
            />
          </div>

          <DodamModal isOpen={modalOpen} close={() => setModalOpen(false)}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
              <DodamHeading2 text="Modal Title" fontScale="Bold" />
              <DodamBody1 text="This is a modal content" fontScale="Regular" />
              <DodamFilledButton
                text="Close"
                size="Medium"
                onClick={() => setModalOpen(false)}
                customStyle={{ marginTop: '15px' }}
              />
            </div>
          </DodamModal>
        </section>

        <DodamDivider type="Large" />

        {/* Other Components */}
        <section style={{ marginTop: '30px' }}>
          <DodamHeading2 text="Other Components" fontScale="Bold" />
          <div style={{ marginTop: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
            <DodamBody1 text="Tags:" fontScale="Medium" />
            <DodamTag text="Tag 1" color="default" />
            <DodamTag text="Tag 2" color="default" />
            <DodamTag text="Tag 3" color="default" />
          </div>
        </section>

        <DodamDivider type="Large" />

        {/* NavBar */}
        <section style={{ marginTop: '30px' }}>
          <DodamHeading2 text="Navigation Bar" fontScale="Bold" />
          <DodamNavBar
            location="home"
            currentTheme={isDark ? ETheme.DARK : ETheme.LIGHT}
            handleTheme={() => setIsDark(!isDark)}
            logout={() => alert('Logout clicked')}
          />
        </section>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <DodamBody2 text="All components loaded successfully! ✅" fontScale="Regular" />
        </div>
      </div>
    </DodamProvider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TestComponents />
    </QueryClientProvider>
  );
}

export default App;
