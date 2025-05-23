import type { ComponentProps } from "react";

export default function FacebookIcon({ ref, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      ref={ref}
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect width="27" height="27" fill="url(#pattern0_2_5930)" />
      <defs>
        <pattern
          id="pattern0_2_5930"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2_5930" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2_5930"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGf0lEQVR4nO2daYhcRRDHW1eNF95XNGZ2uiYmBIng6BcRg2cSc2xe9TzxwgNDJKJGgiIqsh4IMbtTNWNiZAnmgx8UFoSI4EHyQUEJqGiMuigxbkxCJGpM9IPxIDvSbzdgNMcc3dP93vQfCpZl2anq3/R7/aq6+gkRFBQUFBQUFBQUFBQUFBQU1JBk1HcOIM+Qih+UyC8C0jpA3igVbwakXyTyn9qSn5Pf8UZQvDb524geKCi6oRBXzw7D3qTGzxk4ERT1AFJ1dHBpBBTXWjMaAaTPQXEFIp43IS6fEAAdTr29R8u4ciUoHpBIv7YO4PCmP0MqfqWANFfEg10Bzphyd/YeX4jK90mk72xDOCQcxZsl8qLCzOq4Tr8sPQyKd7gCAf+3HYC8RPsmOkn6MgGKhj0AUDv4jKFthYhKIuvK9XA3IL3pesChfjBvyLgyUWRRgDxfL0tdDzI0CiVZYNBNIivSN8pk+erB4EJrNpD6m/6U+cvPlIrXezCYNUP2wYS4fIZIoybPW37+2BNzLUsmFQ1BT/+FIk3KYf8UqXir68EDW4b0fXfMk0UaNCkuXwCKtzgfNGV5piBv78a+nPD/nkFDrgcL2gaFvvL2nqJXIBm7gdfqhPKhl6svibzC9eCAK0OqCp+k0wz+DRL/LpHfA6SXpeJ+UPS4RFosFT8Kip8CpKVS0XKJvGose7BBKv6tuc+jEakYhT/pEN7jHIBKbCcofl6n8afGvcc1Ggsoerr5z6bdXtzkvchNIe+Vip5sNUvbGpDR3Je5kW0ugB7nMBRvyavKNEPxtAREW15V5gh39QzXzxs0XIiqE0zFZAKILrQ5KQ+PFZfc3rSjysWGY2oZSAIl4odEu8uurit9EvkR03EZA4K8va3PJroG7hSG4q02AjYFJPGxxPeKtu0OcbghASzNDuNAFH0rRO0oG34e6DSWr3YJA5D3TYxovO9AtE1CvsqGnwc6jbzaLRD6pEm/Z0jkNYD0dVJKPqjxXsMzeZWwvdRtPr1g7FJQbtRvQH7GzZeH91hdAvvwICiR72rEZ6l4llN/I5ptD4gHmxUKcXl6g0DWp21GNwDEfY0830CaRD/Fu/ZXIn1mryXAyC701qy7gYyqLJVvdu2vXhVedEv/WcaB6FWK8+AU12S89NQGfH7Ctb/a8lHleuNAdLOM68BAca24cODY+n2msmt/E8PK/eaB6G6ktAFBP3zWlUnjQHSLmOvAIK1AkN+1AIS+cB0YpBSIbqWzAMR1MYpTC0QnY80DQd7lOjBILRD+yTiQpO3Yg+CKaQSi6I/UAemOypdMvHXl6UeyRpOh9fzP/WZrB40eO+NAbHc/6f1dwrEk8peWZsjP5p1VtC3TQOLBLtP1kH/ZFuP+2t7V7hpIYX4VbMWmZ55xh/XDTZaByIhmW4sP6S3zDltesbgGAshLrM0QxS+kymEvgCgesAYEabFxh22XQl0DkYretxZfVJ5p3OFcD5+miy1ZBQKjrQzmY0Pep8fOktP2EowugeT0l83e7N9gzXFAfsma48iPAdLCI5neOVmvv8n5W3X8T1D0rK24dKtfOpeGGc1lScWzrAHRg+H6AJliqoDQ7mZa6xqSPhYvAOH6gCCvFrald1AEIOxut4lvG+aKKblkjeav2tCOMBboogCEDw+lRAtEuzTt9r6TJNKPYYbwoYDsbHvjp6uNc8UUXLJ0y59ot/TASORNAQj/F8g3jXxpUn/GSdHzGSKjciRcCpBeD0B4/8pqjXCtXLzsvHbu2Sp6OkP03qv83Mq5wge1sw+j6CmQPFaU8EkSmToViETuE94pHuySit7pOCBI66ZP7z1G+CjduqUPhuwUIFLRkD74U/gsfWNLmvMzDkQib9KHRYs0KDn2z1L7QtELIDScurcm6PNIJPKnmQOCvDF1R43v19R4xclS8dsZArK2cFv1FJFmJWVfRctM9bgXnQChEb209XY11YykqlwLyD+kEMhOieUbRRY1mmahV1MDBPk1b9IhNpVHuk6nqX0FIhUNyYiuEZ0kPbAFrNyTvCrVEyBy9FWuC53VM3xQUugqle/WJ8WBOyAboMR3ZOqmbUIQ0aWgaKXuybMOBHmXPvJCf6bdqLKgeLALVPUKifwcIH8skf5qFYhU/Dco+kjv49V7fsNsaEGFmdVx+ahyeXIWbgMvEk7enViiBVLRZfrw51Z8CAoKCgoKCgoKCgoKCgoKEh2ofwA+NohRctBzfwAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}
