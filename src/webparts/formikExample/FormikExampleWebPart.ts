import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-property-pane";

import * as strings from "FormikExampleWebPartStrings";
import FormikExample from "./components/FormikExample";
import { IFormikExampleProps } from "./components/IFormikExampleProps";
import * as moment from "moment";

export default class FormikExampleWebPart extends BaseClientSideWebPart<
  IFormikExampleProps
> {
  public render(): void {
    const element: React.ReactElement = React.createElement(FormikExample, {
      email: this.context.pageContext.user.email,
      name: this.context.pageContext.user.displayName,
      loggedDate: moment().format("DD/MM/YYYY HH:MM:SS")
    });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
