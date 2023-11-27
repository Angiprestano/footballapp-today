import { Card, Button } from "react-bootstrap";

const PremierLeague = () => {
  return (
    <>
      <h4 className="ms-4 mt-4 fst-italic ">Liga</h4>
      <div className="d-flex ms-3 mt-3 mb-3">
        <Card style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src="https://magliecalciostore.com/media/cache/sylius_shop_product_original/70/c1/e41de9b1126c4811989a1721107e.jpeg"
          />
          <Card.Body>
            <Card.Title>Maglia Manchester United 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary" className="p-1">
              Acquista
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://www.11teamsports.com/it-it/media/63/9f/b2/1687433445/adidas-fc-arsenal-london-prematch-shirt-23-24-k-r-10261713-hz2196-000.webp"
          />
          <Card.Body>
            <Card.Title>Maglia Arsenal 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://images.keepersport.net/eyJidWNrZXQiOiJrZWVwZXJzcG9ydC1wcm9kdWN0LWltYWdlcy11cy1lYXN0LTEiLCJrZXkiOiJwdW1hXC8xMDI2NDM5MV83NzA0MzdfMDAxXC9wdW1hLW1hbmNoZXN0ZXItY2l0eS1hdXRoLXRyaWtvdC1ob21lLTIzLTI0LWYwMS03NzA0MzctZmFuLXNob3BfZnJvbnQucG5nIiwiZWRpdHMiOltdfQ=="
          />
          <Card.Body>
            <Card.Title>Maglia Manchester City 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFRUWFRcZFhUYFxUYGhYYGRgWGBgaFxsZHSggGBolHBcYITEhJykrLy4wGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0wLy0rLS0tLS0tLS0tLystLS0tLS0tLf/AABEIAPwAyAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQEDCAL/xABJEAACAQIDBAcEBwUHAgUFAAABAgMAEQQSIQUxQVEGBxMiYXGBMlKRoRQjQmJygrEzQ5KiwVNjc7LR4fCD8QgWNMLiFSQlo7P/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUG/8QAOhEAAQMBBAgFAgMHBQAAAAAAAQACEQMEITFBElFhcYGRofAFE7HB0TLhFCIzI1KSorLC8SU1QmJy/9oADAMBAAIRAxEAPwC8aUpREpSuKIuaVxSiLmlKURKUpREpSlZgolKUrCJSlKzBRKUpWESlKURKUpREpSlESlKURKUpREpXFc0RKUr5LW1Ogoi5pUH6SdZ+Bwt1R/pMo+xEQVB+9J7I13gXI5VU3SfrEx2Nupk7CI/uoiRccnf2n8tAeVZhFb3SnrIwWCJTMZ5QbGOKzZeedr5VPhe/hXfNtQ4mASwuGVlDJbcRvt57xrxrzWF4CpL0S6Wz4NZI0s6MCQp/dyHRWHgTa68fDU1Q8Rs1StSimeEwCO+5hS0ntaZKt7B7cYaEsCN4uRb41s0243v/ANa86jamLjZn7aS7EsxJzBiTqxBuNT4Vnr01xUej5L/eVlPyI/SuefCrQ39J/IkKXz2n6h6K/wA7db3/AJD/AErGn283vn9Ko5+nuItokf8AMf61r8X0txb/ALzL+BQPmbmg8OtrjDqh/icekp51MYN6K7JdrPLII0N2OupvYC1z5C4+IrJ250rGz4O0YhzuSMm3aNyB+zzJtpVG7Jx2IwmKGIfMZI7h1diSwIIKsdTx3cCPCvjbu05sTJ2s7XNrAbgg5KOA/WpKPhb2121A+6AS4YnZncfQ4TCw6uC0gj7K/uifWNgsbZM/YzHTsZSAWP8Adt7L+Q18BUzrx2QDvqZdFusnHYOyF/pEQ/dykkgfck9pfXMBwFduFWXpKlQjo31m4DFWVpPo8p/dzWUE/df2W8BcHwqbA1hFzSlKIlKUoiUpSiJSlKIuK+HcAEkgAC5J0AA4muyvPnWn01fGTPhoXIw0bFbA27Z1Nize8gPsjdpm1uLZARTjpX1t4eC8eDX6TINM97Qqfxb5Py6feFVP0g6W4zG3+kTsUP7pe5GPyD2vzEnxrSUFZhFxXbBCXYKLXPPQAAXJJ4KACSeQrI2ZhVcszkrFGM0rDfa9gq/fY90ed+Br42hjFscgVTIA0mXci6FIVJ+yAFLHiwHu6xGodPQaL+g+8ZbtcrMZrpkQNJliuV4E6XAGrH3RoTbgOdbfB7NG8jui28am4vr4nfbgLDjW26P9GgAvbMqM+TOCy3HaE9nEVvmBsuZr2uSqg6NUkHRhnIS5C72J32N9/if9huFc+t4hTmAbhn7jXs2X5qQU3Fanob0ZGIkM8gBiRu6ODsNf4R8/LQT/AGpMqRlnXPuCpYEux0VVB0uT8N50FZOCwixIsaCyqLAVXPT3pINOzbVwwgIPsxG6vP8Aik1RD7mZge9XCLn260ADDAbB85npgFaEUmKK9KdoI8hVFTusS7ooAeTdZTb9mg7o56sd9YeyIco+kuNEYCNT+8lFmF/uJozc+6PtViYHCNK6xoBdjYX0AA1JJ4KACSeQNbHamJQ5Y4r9nGuSPgW1u0hHvOxLeoHCvUNpBrRQbhF52at7sNQExGiFSkzpLCmlZiWZidSSebHUmsJzc3JPxrIm0AUetbLYWAwzjPNOEKvbs2HdcWuLnSwJFt9WHvDBJHJZp0y8wFr8VGEWNd7lc7+AaxRfPLZj+O3CvpsI4jWUowja4V7HKSDYi+69xW+/8oSyuGGJilDtdnU3OpOY2HdB36EgbhVr4DBxrCkaL9WEChSAe7a1mHE865dp8S/DtbA0iccuXHAHIQVK2zkzNyoO1b7o50yxuCsMPOcg/cv34/LKT3R+ErW86d7CwyFnhAi7JA0tr5CzG0aKODt3jpoALka3qF4rCvGcsiMhsDZgQbEXB14Vfs9pZXYHN5Hu/I3ZETioXMLTBV5dE+tzDYgiPFD6NKdAxN4WP4/sfm04XNWSpvqN1ePCKsXqm6cyYeePBzuWw0pCJmP7BzomUnchNlK7hcEW1vMQtV6ApSlYRKUpREpSlEUW6ydtHCbOnlU2kZezjI3h5DlBHioJb8teZ0FXB/4gdoaYTDDcTJK3moCJ/nf4VUAFbBFxeucptmI0N7elr/qK+FbU3qQmJS+Fjf8AZxwCaXybNiHB80KIPSoqlUU8dpO4CT7DisgSsPax7KOPDDeAJZvGWQXVT+CMqPNnrYdC9kh27d8oVHCoW9gOFMjSP91FW9uLMova9aNjLiZtBmlmkOnN3JPoB8gPCrk6I7EiEC91XQDLGSo7yahpPESMWbllKcq5lvr/AIehoE/mdeY246scP/IOpS026blooMBKk+eWWH6KS6FR2jzSAK7BmcIG7Q5ic2bS5A1OsjXaSWCRDKotbS1/srYcBpp5X4VjdOdprhoezjCq8ugIAFlG8nwt8r1CDtDs1ykkXHePEKPbPnuXzYkVzqFnNoYKhGwYXxncBfOcknhClc/QOiFN+kG2kyFC3cCFpWUkHshYEKfekYiNfAuwOlU9tTGPPK8z+05vYblG5VXkqgADyrN25tNn7m4sQ0g5WFo4/JQSSPeY1h4KNC6LKSqFgZCN+UakDxI0HiRXYsFkbZ2l2ftjzPxmoajy8rOij7DD3/e4lfVMODu8DIwv+FB71au+9vhWTtLHNNIzsACx3DcqgWVR4BQAPKsORuFXaTC0S7E3n43AQBuk3kqMmV1k1lYZtBYXKEkqftfeHiLbvXnXQaydkbOeeeOGL23awOvd4lj4AAn0rZ8aJJMAd+i3pPLHSB3Iw2zB6Kf9CpZZVSOFBJEokMiubKyzOSRusGGtjv0NTFsYkUDP7SxAjugd/LoMltCWNhYcTauNj9G0w6NGrExs2YruzGwvnt7Qveyiw11BrT9NNrdmMkYDNG6KiaHPiWF4EtyQESkaa9l415K0VmWmoGsGe7nzvJgDdK6VV4AMRw9efLDUtCqCWdjOR2GDzTYpt6viW1Kj3ggAQDklvtVhYjAnGCfF4p+yULmDHXshY9jCqjexDBm495ANSbZU2D/ZbNiIfIyyYlzqJsS92VW11RQpkYcQijea0fTDawkcYWAnsISbt/ay3JeRuZuW+LHiKvWZjn1Gindtwhs4xreb9ggYNhUnm6/s/b1lRy1dZNfV6+LV6FVl6l6A7b+mYCDEMbuUyyf4iEo59St/IipHVQ/+H3aF4sVhifYdJR5SKUNvWIfGrerVEpSlESlKUReeuu7FZ9qFb6RwRJbkSXkPycVBKkfWSzSbXxeQF2MqqqqLsxWONLADf7NSzY3VlGidpiH7WQqcqAFY1JHHi5B52HhVe1WylZmgvzwHfv6rdjC/BVY5uN1bmWfPJJbTt8MnZnhePsSy34fsHTztzrSK+gJ5D/nhXZgcYAezb2bkqfdJGVh4Bl0PiFPA1vWaTeMvkHoQPRYaVIOg0Redu7cGPITy7WWKPQ8CVZx5X5VeaINwFuQqs+qrBgZmNiVc6+IRQvoO0m+I5VndNpp5sfhsDh53iLp3iruo7xOrZSL2WMm3jXnrZTda7b5TDG07h2N+1WaZ8unpFRnpbtb6RjHYHuIezT8psT/Efg1aXFz3a+8bwOYX2L+F7t61I+l3QKTAwrMZhKC+RgEK5LgkG5Y3BItuHDnWR1XbETFYtnmRXiijuVYAqWbuoCDoRYOfNRXoadnbTaGDACO/XeqhdJkqCpGb3bXj5nxp2Zvc2186uHptsLDrjdmxR4eFFkmbtAsaKHVWh0aw1Fi2h5mpDtboTg5OzVcLCg7UNIURUJRVc5bqAQC2QHwJqxCxK89FDqa+RCanvTnYqnaX0bCRKuZYwqIAozFbkm27TUnkKn2w+gOCwkfaYkRyuBd5Jbdmv4VbugeJuf0okqhOxPA1afVJsMLE+LaxdyUXUHIinW/Isw3cgvOpkkeyMWeyVcHI3BVEYb8pWzfCod0h6NzbKf6ZgXZoLgSRtc5QToH95NbBt638b1Tt9nqV6BpsME9dmye7pUlN4a6SFNtqYsQxSSsCQilrDebDRRzJNgPOqxkxGTFPJM1xg4mzEXs2MmDSSsu/2bMAOHZqOVSjH9IYsVHCy/s0BxOIU65BBqkbeLTZCOYQ1AsOzdlBnF3xE74mUb7jtC1h5jDNb/E8a89Y7OWzpiMsYyJP8rXDc4HUrVR0xHeHyF3YrHNhcMW3YnE9prrdAxHbPfhuWNfwEjSocg0sNwHxrf8ATrEf/cJDfN9HgjhZvecAs5+LfEGo0Xv3RXfsLR5XmEXuv+OEe6q1MY1d+q7VB318k1xu+yaszC9BYMZg4J4j2EzRJcqLozBbNmTgb31FvG9b2i1ss+iXzBMTq3/ZGMLsF1dRGLK7SZOEmHcfmVo2HyzV6Crzv0E2TPgds4RJlADtKoZTdXBhk3Hfvy6EA16IqZj2vaHNMg5rUggwUpSlbLCUpXFZGKKu9ibDEOIxUzHNJiJ5XvYdxS7FEU79xF/Gtu6aEcwbev8AvXEWpv43rIf9Nf8AUV4SvVdVc55xP+B0XSa2BC8vKNB5D00rEnGtbfaEYWWVOCyOo8LMR/StVil3+Ve6mb1zVYPVhtfIwjNznspt9l9cvoVUa+B5Vs8LjynSJTINCwRT+PD5VI/M1vWmx8AMJtOeLKLGTu+AkBdPgJCPKtf0vbLtjDNyOFJ9J2/oK5NOG+ImBi3HiPiFO79Hirr2rgI8TA8EnsyKQd1xyYeINiPEVpOrzYDYLDtHLl7R5nJI+0FuqW8CqZrcMxro6a404WTA4rNlQTGCXXTs5gCxa/BTEGv4Vqdu9NsP9OwapMpw8TNJLKl3Us0ckagZb5rBjuv7XhXaKrLZ9KBfa2zAd1pj6hb/APtFYfXPMRhIlBNmnFxzAR9/PUg1quk3TXCPjcFiYmeRYDL2lkZSQwUDKHy3+1Wo6wemUWPSJIo5ECMzEvl1uABbKx8awSsrP6lsErTzykaxxqq+HaFrnztHb1NY/W7td3xX0a5EcKqcvAuyhsx52VlA5a86+OqTaqwYtoXIAnUKD/eKSUHqCw8yKkXWd0NlncYrDLnbKFkjFsxy+yy8zbQjfoLUyTNQDC9FcW+GXGRJnju3sE9omRiC2XfvXetz5Vb3QnaX07Z6mezkh4pb/bA0ufEqRfxJrQ9V+0MWgGDmwcqxLmKymN0ykkuQ+bQ3JNiNd2h3ibYqSDCRSykLHGuaSSwtcnebcWY8OJPjQIVQILxyYjBGTLD2tp3sM2WB3GnMk8OJy8L1k7N2msmKadkyw4aLNYHRFXIsaD3icoTxzOaju08aZJJZDoZXZmF/fcuR8a6Y8WyxGJTlVmvJa13tbIp42UhiBzaqdagKkxndwMSd8AAbhlK3a6EWCTFSux0JLyytrZbksfmdBWBhNSeI4eX9KnfVpsnthObXBDAj8ETuL+ZNvSoLgl0HkK2pP0nuAwaQByBPrHBCIAWUVPOrf6qsVmwOW9zHI6eWYiQf56qQCrF6n5//AFMfAGJx651P+VaqeL09Kyk6iD7e63oGHqw8PEpniLAHK6kXG43tccjrU3qEKbMp5MD8CKm9V/BHfs3jaOo+y3tIvCUpSu0q6V8OLgjwr7pRFoV2TIvI+Rt+tcPhHH2D+v6Vv6VyH+C2c/SSOIPqPdTi0OGpeUdubMmWedjBMoM0pGaKQXBdiN45VouzzOI76swW3G7EDd617LriwrqhsABQKremWAy7TVwNGELX52zx/ooqtuslyMeCDYiGPXkQ0hH9KufppBfFYduasD+W5HzNUr1iOGxUh4hwnosUTfrJXJb/ALiR/wBT1j78lYP6XFajam2p8QQ000kp+8xIB8BuX0FZ2wpIFlR8QGaNSGKKobtMrC6G7CwIvrr5a6aOJbmsqCJnZUQXZmCqOZJsK7N2arqwsL0zw8WZkwpN5AQ3ZwRBsoiIuqAhWUqbAE6SXNaXpP0gfGrHaNgI2YXzZ7l1jFtALH6st45jWj2hKpYJGbxxjKlvtG/ee3N2ufLKOFS/ZmxmWyW1isp5dvKAWPkiED+OoKlcMaCc8u943Sshq0MuzDkzqbEGy+NiATfgcxOvhUw6P9Z8sSiPGRGWw0kUgSEfeDaP53HrvrHxWz8xWGMaEhR+GwHxI/z+FWFFsmEQrC8aOqi1mVWF+JsRzqhV8TFAAkTPC5SNpaajuL62cMF+rgnZraB+zRfUhmI+Brr2J1nQTZosciwk3ANi8bKfsuCCQbaG+h8N1dXSmHCYbvR4eFTCvbOQiAlr5MPHe1wGku3lEedVDO7O1zdnY3PEszH5kk1bslsNpBcGwN/eGPLWtXs0TCs3pjhdirhppcMcMZmjIjWOXNZmsLrGGKqRe97aWqqpdBb/AJes/a2GSKQRKczRraZr3Uy/aVPur7N+JBPKtbIasscHgOGBWhEK4eozZP1csp/ehrDkFOQfEl/lVO4RDYCxuNCLagjQi1ekeq/B9nhkU71ghB8yt2+dTeqthqeZTNTW5x6wOghSVBBjYF5Lg2ZO47mHnf8ADFI36Kan/Vb0ex0eIkaTCTRxvCRmdcneDIVFmsd2bhV60qavSFamabsCtGmDKjA2FK28hfM3PyqTCuaVFZrHSs8+XN8TJnCfnJbPqOfilKUq0tEpSlESlKURKUpRFHOlkV2hPLP+ij+teeemMubESf4sx9RIYv0iFej+ko7qfiP6V5m2+c0pb3i7fxzSuPk1cum3/UKh2D0+ymcf2Q4rp2XhGldY4xd3YKo8Sba+HPwFbnGiOIyPD7P/AKaJuLZUCzzet7D/ABT7tcdHvqYcRi9xjTsoT/fTXXMPFUzn1FaZXNlW+ighRwAJubepq6QalQjIQN5ME/2jcXDNR4BSLobhAZWnZcyYdQ+XTvyk5YI/NnI/hq2MBskRw2Y5mCnO/FnZi0z+rE2HhbjUb6AbKssKEbgMVNv9p7phk8goeQjgcvOrDtXnfEbVp1jBuF3L5vOogjUrVJn5b1pdnbPUOZCADuA8uXlu/LW2kYAEnQAXJPACtViseMxRTou/mSdPnu/MKwukuPTJ2TmysG7YjhBGA2I05EZYvOTwqpUa5xBd2FuCGqvenu1S+VNQZT27DW4UjLh0PIiIZiOclRvZLZXab+wjZ1J3dobRxfCR1b8tdW1cc080kz+1IxYjkOCjwAsPSu/GjssJHH9vEMJn8IlzJCPUmR/4K9Q2j5dBtHN1x43u5NBA3NCpl0klaq3d86YTDdrKkX9pJGn8bBf60J+VSDq9wJlxsR4RhpG/KMq/zMPhU9oq+XSc/UCeK1aJIC9A9F0t2lvuf+6t/Wg6Jm4m8JAPgiH9Sa39V/DW6NlpjYt631lKUpV1RpSlKIlKUoiUpSiJSlKIlKUoijPTzaC4fCvO+5ATbmbWUDzJA9a814tCGCneqRA+BWJL/wA169Adcg//ABsv5P8A+kdUFszCmaZI76yOFJ/EwzH0uT6VVYxra1Sqdx3BoPytySWgLZ7YPZ4fC4YbypxMni8ukd/ERKv8VdOwNmdvPFETZWbvnlGvec+HdDV0bXxonxEkq+yznIPuCyxj+EKKlXQfZufObftnGGU/3YHa4k+F0UIDzcVpUqGhZy43ON/F155SeA2I0aToVm9GYz2RmIs07GW1rZUICxLY7rRKgtzvzrI29tEQQPITqBYeZ/5es1RVddYe188y4dDpHYtyzm1r+AuL+BavN2Wj+IrgRdidw7AVx50GrqweMYKXJ7xItf3zoAfAHf8AgvWg6S7UJRlDH6whB/hRE3J8WkvfnkFfOKxZsqKbHSxO/Mw0J8VS5P4qj2OxOd+7uACoOSrov+vrXo6NnBfpHf8AHW8KkXXQmDjVnRXbKjOqs3upcZj8K42vje2meW2UE91fdRQFRfRQorGlbluFdbcqvaA0tLZHzzu5BYnJfF6srqkwg7OaX7RcJ5BRm+ef5Cq0XU1ZXV65jwE8hOUNMQG90ZI1L/l1P5a5vi8mzFozIHVS0Pr5qz+r582Hkf3p5D8CENvDMrH1qVVF+r03wcbFcpcByvulxnI9C1qlFWrIQaLSO7zC0qfUUpSlWFolKUoiUpSiJSlKIlKUoiUpSiKvuumS2zmHNkH/AOyM/oKpDYx7NZZuKRsEP35Pql9QGd/yVdnW/DnigUi8aTdrNf8Aso1LEfmYKgtxYVTeJw4XCwi31k8pcDkiAxpe/NmksfA1RDw51Snrc0c2gn+Vp58VJFwOz3WFgY7K8hGiroPvHRf6n8tXF0I2T2QAI/YRiL/qyZZsQQeIuY0/6ZqC7G2eFkjXLmECjESL70jkDCw+DMShsf7Rhwq29k4LsolQnM2pdre07Es7erFj61zPFbRpgNG/vhftDgdRU1Bmfffwuds7SXDwSTvuRb25nco9SQPWqFfGGR2eQ3Z2Z3PO97/Ikfm8KnnWxti3Z4VT/eSfMIP8x/hqulfQ+JH/AD4/pVrwizaFHzDi70GHW/kVpXfLo1LvxGIJBJ3m49W1b4Cy1hILXNfUzX05f8PzrrY6V2GiFAvk18k0Jr5JrKL4Y2q622Bk2YcKvtdgwJGl3ZSXPqxNU7s7DmSaKMC5eRF/iYD+tegdpuVhlYbxHIR5hTauB4zVLXU2jXPpHurNnH1FbLoFic8MnJZXUfhDNl/ltUpqA9VuJv8ASk4LIGUfdJdV/lRT61Pq6djbo0Wjf6lQ1DLkpSlWlolKUoiUpSiJSlKIlKUoiUpSiKp+ulzJJhcMjHPIfZ4FSwF2/MFt5E8Kr8SRyTyTkXw2HTKn3kjAVVB5uWUf9YnhUu60sTlxs8upZYYsNCB/aTCRmI8QjN6staXDbNCPHhiM4gVJp1H7yVtMPBv+07k2PBvu1zq7w0u2T1gu6FjQf3iRepBfHe7repL0G2S188v7QN28/jiJFvHHv0EUTXy7s0ot7NTTGYlY0aRzZEUsx5AC5rp2Tg+yiVCczas7e/IxLO3hdibDgLDhUJ63Nu5IkwinvS96S3CNT3R+Zh/KededZTNrtAaMz0zjZGHAK3OgyVW22dpNiJ5J33yMTbkNyr6KAPSsQV1dpX12te0ADQAMAqCWrnLXz2gr5aWsouTXBoOdcnSsIpn1U7J7XFmYjuwLf873VflnPoKs/b0gWFidxKqR4M6hvkTWs6v9kfRsGgYWkl+sfmCwGUHyUKPO9YPWFjisbRoe8E013STH6PFfws07ecfhXkbXV/E2y7AEAcPkzflKvMGhTvWb1NSEtiQxucsIPmFsfnerSqnep7aC/TcXGD3WIyeQzn42UVcVenoSGwe5vVN2KUpSplqlKUoiUpSiJSlKIlKUoiUpSiKluljJ/wDVZZZNYsOj4uQaWJVI4I08yYSR51kdBcC7ESS6vf6ROeeImW8ab9BHC18p4zC26tN0imWbE4oufq5ccUfkMNgVMk3oWuPM1Puj8LJCpkFpJCZJByd+8V8lFkHgory1vrG8az0kn+ouB3NIwuuU2997IWymmCqWYgKoJJPADUk1556SbUbFYmSc/bbuj3UGiD4AX8b1Z3WrtvscMIFNnnJB8I1sX+N1X1NU67WNXvBLPosNY53Ddn16haWl0nRTKa5y/KuFfS/wr7B3Cu6qy+culcAcK7g41bloPOvvAx3uw4WC+Ltovw1PpQmL0XKpr+H5kf8Ay/Stp0K2P9KxkcZF0X6yT8C2IH5jlHkTWO8ACg30O48co3fGzv6CrO6sNj9lh2nYd+drjwRbhR5XufhXNt1q8mg5wxNw3n4x4KSkzSdCmRI41UnTDaueRDf3sSd+gI7LCDw7ozlecpqxOlWItF2ZOUSkq7e7Eql5m03fVqyg82WqN2ttEzySTMLGRy1vdW2VF9FAFcfwey6by44Dv54gKxaHxcpZ1RYnJjsPw7WeVD5JhpGH80i16LrzH0Vn7LaGzE4q8RbmGxLXN/KN4x6V6cr0lIyNLWSeE3dIVQpSlKkWEpSlESlKURKUpREpSlESuCa5rGx0oSN3JsFViTysCawTAlFQuzVEjYYM1mkS7KbXJxE7YiW44fVw5fzrzqzlc1UG1tg4nFpHNBAGFizLdQR2gQxrZiL5YFhGnEmtJPhcbhh3kxMIHEGZF8NQctecdYW2kBwqgOv/AC3Yk354arlaFQs/43LK6e7WOIx0hBukX1a8u6Tm/nLegFRu1dkh57zqfh/3og3nl+teio0xSphjcAI+/FViZMlOPgKA8ee6voIdFAJJ4DfWz2+FjdIFAvAmVyPtTMc0nmFJy/krJfDwzMzyGJ5kDisZStVKdygbvma3+C2a1gm4qSCfvkXkP5F7oPO9dfRDZ5kkaXLm7LKEU3s+Ic5YlOnsg3duQWrKj6PLGij2t4zG3e3EseF3bU+AvzrnWy3spv8ALz94nvXMYhSMplwlQqHZrTzxQLoCdfuqLfpl/lPOrhw6KiKiiwUAAcgBYVoujmyViJkOrMDa+/Lp/tW02ziuzhd1tntaMHQGRiEjX1dlHrXBt1o894Y3AepVqkzQBJVf9Y+2tJAp9q+Hj3eypV8U3kWEcXmr1X+zcP20yRk2Um7n3Y1BaQ+iKx+FZ3S/EZsSyKSUg+pQnjkJzseZaQuxPG9dWCHZ4WabjKww6eC6STH4CNPzmu9ZaXkWYaP1OiN7sOQvI1h18Ks92k86guzY+0S+0YJ20zYuJ7e6O1Wy+QFh6V6wrxsshUhl3qQR5jUfMV6/2diRLFHKuoeNXB8GUEfrV8N0XQMIAHCfkKMlZVKUrdYSlKURKUpREpSlESlKURK03Sxh9EmBBbMmTKN7ZyEC34XzWvwvW5rB2thmkjKra9wdfA3qKuXCk7REmDA4LZsSJUQ2ZhezjVL3IHeO67HVjbhck6VWHWrt4yTDCRnuRWL/AHpCNB+VT8WPKrE6U7UbCQu+UmQCyJlJJY6A24qN5PIb6ouVw7M7E5mJJN9SxN2JuLXufe41w/CLG51U1njD19o9dys13wNELCIrJA1C8tTXMWG1uDe3hfy9m9dn0cge0t25m3+axr0YKqLYbCspkxbAFYFDKDuaQnLEv8fe8kNaN2JJZjckkk8STqSfG9b/AG1CYoosILZh9fMLrftHXuLa9+7Hb1c1x0X2YzTiR42ZIR2jLb22uBFGL8XkKi3K9VPMDWurnDLaBcP4iZBvuIW0YNU+6C7E7MKrD9iMz+OJlUFuH7uIqgP335VMMRlynNuA+W4/LT1r52RgGiiVGN31aRt2aRiWdh4FidOAtUd6ebSZEWBL5nN28FH/AGJ9K8m0PtNoicTjzJO7NXpDGLOi2qGe9wBfnpZb3J8BqfVeVR/pb0hyKXU/siMg54h17gIv+7QmQg8XTXStY+KZFAIOl2Isb2Xh4ktlHiFNRXbsjsyoxHcuWubXkc5pLXOoBso8Frq0fDWOqCcPbswd85Kua5hadCxNhdiSBbeSTu8yTWy6QOFaPDqdMPHka24zEl5iDx75y/kFfOzG7GRJdCUzMuhYB8rBGNhbutlbfwrFKKN7E+JI1+F7/EV3C0uqAnADqfgb5DsoUGSxrV6j6t5s2y8GTvWBEPnH3D/lrzjszZWIxDBMNh5JCfdUgercB5tavRnVxsabB4CLD4gr2ilyQpuFDuzhb7iRm4aVvN8LClFKUrKJSlKIlKUoiUpSiJSlKIlKUoixcbg0lXLIgYePDyO8HxFQ3bfV+j3MYVx7kgUn0Yj9fjU8pUNWz06v1C/WLjz+bls1xGCpHGdCYQcskBQ+BZfhrY10Q9C4lkVw0hCkHISpU2N7HQGx3b6vCaJWFmUMORAP61r5tgwN9kjyJ/Q6VRdZrUz9OpI1On78xClD2H6gqPxvQaSSRpDigxdixDRkak3075015Vvei/R36Nlz5W77SOV0zOBliG72VBdvxEcqst+jUfB2HnY/6V1N0XH9p/L/AL1FVba6jPLfTBGxwHfyJWW+WDIK0zYsHg1QTavRnET4hpnliFz3RqxVRfKNQPA+h51aX/lf74/h/wB6+16MDjJ8F/3qGz0K1Ek06N5uveFu9zHYu6Kpj0NYtdsQCLggCIHcO7qTwN286606BRg3M07c9UUHzCrf51cidHIhvLH1A/QVmQbLhTdGvmdf1q2GW110taNl574qOaQyJVQbO6vInN1gaQ82ZyPUkhamOx+rmBLF441+6irf1Yj9PjU8pU7LEMar3P3m7lP2WhqfuiFi4LBRxLljQKPDj5nefWsqlKuAACAo0pSlZRKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURf//Z"
          />
          <Card.Body>
            <Card.Title>Maglia Watford 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://www.merchandisingplaza.com/512192/2/Maglie-2023-24-Liverpool-FC-Maglia-2023-24-Liverpool-FC-Home--Nero--l.jpg"
          />
          <Card.Body>
            <Card.Title>Maglia Liverpool 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4">
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBW-dbUkxunSMl771Qk8tHZpUwXXf6zTAURMv97Yfqn81orqqFFQwvBs7rFsjmD341YEk&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Maglia Chelsea 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="ms-4 me-2">
          <Card.Img
            variant="top"
            src="https://madrid-shop.cn/wp-content/uploads/2022/06/4005052B-2D6C-4126-A5A4-D11BDD7CF9B8-1-450x450.png"
          />
          <Card.Body>
            <Card.Title>Maglia Whestham 2023/24</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default PremierLeague;
