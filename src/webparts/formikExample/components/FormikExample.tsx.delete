import * as React from "react";
import styles from "./FormikExample.module.scss";
import { IFormikExampleProps } from "./IFormikExampleProps";
import { escape } from "@microsoft/sp-lodash-subset";
import FormikExampleForm from "./FormikExampleForm";
import * as moment from "moment";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

export default class FormikExample extends React.Component<
  IFormikExampleProps,
  {}
> {
  public render(): React.ReactElement<IFormikExampleProps> {
    return (
      <div className={styles.formikExample}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>
                Customize SharePoint experiences using Web Parts.
              </p>
              <p className={styles.description}>
                {escape(this.props.description)}
              </p>
              <a href='https://aka.ms/spfx' className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
        <FormikExampleForm
        // email={this.context.pageContext.user.email}
        // name={this.context.pageContext.user.displayName}
        // loggedDate={moment().format("DD/MM/YYYY HH:MM:SS")}
        />
      </div>
    );
  }
}
