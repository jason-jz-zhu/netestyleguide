import React, { Component } from 'react';
import SmallSwatch from '../../components/ColorSwatches/SmallSwatch/SmallSwatch';
import List from '../../components/Layout/List/List';
import { FlexRow, FlexColumn, FlexObject } from '../../components/Layout/Flex';
import './Email.css';
import Footer from '../../components/Footer/Footer';

class Email extends Component {
  render() {
    return (
      <div className="Email">
        <h1>Email</h1>
        <div>
          <h2>NETE Email</h2>
          <p>The below font, footer, and styling shold be applied to your NETE email.</p>
          <p className="nete-email-sig">{`Jane Doe | Management Analyst | NET ESOLUTIONS CORPORATION (NETE) | 8280 Greensboro Drive, Suite 200 McLean, VA 22012 | Direct: 703-893-6983 | Mobile 123-456-7899 [OPTIONAL] Fax: 703-995-4721 | Email: jane@nete.com | Web: http://www.nete.com`}</p>
          <p className="nete-email-disclaimer">{`Disclaimer: The information in this e-mail and any of its attachments is confidential and may contain sensitive information. It should not be used by anyone who is not the original intended recipient. If you have received this e-mail in error, please inform the sender and delete it from your mailbox or any other storage devices. NETE shall not accept liability for any statements that are the sender’s own and not expressly made on behalf of NETE by one of its representatives.`}</p>
        </div>

        <div style={{ fontSize: '10pt' }}>
          <FlexRow>
            <List listName="Acceptable Colors:">
              <SmallSwatch color="#9B9B9B"/>
              <SmallSwatch color="#4A4A4A"/>
            </List>
            <List listName="Acceptable Fonts:">
              <div style={{ fontFamily: 'Avenir, sans-serif'}}>Avenir/Avenir Next</div>
              <div style={{ fontFamily: 'Lato' }}>Lato</div>
              <div style={{ fontFamily: 'Open Sans' }}>Open Sans</div>
            </List>
            <List listName="Acceptable Fontsize:">
              <div>{`> 10 point font`}</div>
            </List>
          </FlexRow>
        </div>
        <div>
          <h2>Client Email</h2>
          <p>The below font, footer, and styling shold be applied to your Client email.</p>
          <p className="client-email-sig">{`Jane Doe | PROGRAM NAME [OPTIONAL] /CLIENT ORGANIZATION [Contractor - NET ESOLUTIONS (NETE)] | Email: lastnamefirstinitial@mail.nih.gov | Work: 301-123-1234 | Mobile: 123-456-7899 [OPTIONAL] | Fax: 703-995-4721`}</p>
          <p className="client-email-disclaimer">{`Disclaimer: The information in this e-mail and any of its attachments is confidential and may contain sensitive information. It should not be used by anyone who is not the original intended recipient. If you have received this e-mail in error, please inform the sender and delete it from your mailbox or any other storage devices. NETE shall not accept liability for any statements that are the sender’s own and not expressly made on behalf of NETE by one of its representatives.`}</p>
        </div>

        <div style={{ fontSize: '10pt' }}>
          <FlexRow>
            <List listName="Acceptable Colors:">
              <SmallSwatch color="#9B9B9B"/>
              <SmallSwatch color="#4A4A4A"/>
            </List>
            <List listName="Acceptable Fonts:">
              <div style={{ fontFamily: 'Helvetica' }}>Helvetica</div>
            </List>
            <List listName="Acceptable Fontsize:">
              <div>{`> 10 point font`}</div>
            </List>
          </FlexRow>
        </div>
        <Footer
          preTitle={'BASICS'} preContent={'PowerPoint'} preLink={'/PowerPoint'}
          afterTitle={'BASICS'} afterContent={'Citation'} afterLink={'/Citation'}
        />
      </div>
    );
  }
}

export default Email;
