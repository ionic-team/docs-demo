import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'component-skeleton-text',
  styleUrl: 'skeleton-text.css'
})
export class SkeletonText {
  @Element() el;

  toggleSkeleton = () => {
    const skeletonEl = this.el.querySelector('#skeleton'),
      skeletonStyle = window.getComputedStyle(skeletonEl),
      skeletonDisplay = skeletonStyle.getPropertyValue('display');
    const dataEl = this.el.querySelector('#data'),
      dataStyle = window.getComputedStyle(dataEl),
      dataDisplay = dataStyle.getPropertyValue('display');

    this.el.querySelector('#skeleton').style.display = skeletonDisplay === 'none' ? 'block' : 'none';
    this.el.querySelector('#data').style.display = dataDisplay === 'none' ? 'block' : 'none';

  }
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Skeleton Text</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={this.toggleSkeleton}>Toggle</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list id="data">
          <ion-list-header>Albums</ion-list-header>
          <ion-item>
            <ion-thumbnail slot="start">
              <img src="/assets/thebeatles.jpeg" />
            </ion-thumbnail>
            <ion-label>
              <h3>Abbey Road</h3>
              <p>The Beatles</p>
              <p>1969</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <img src="/assets/pinkfloyd.jpeg" />
            </ion-thumbnail>
            <ion-label>
              <h3>The Dark Side of the Moon</h3>
              <p>Pink Floyd</p>
              <p>1973</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <img src="/assets/boniver.jpeg" />
            </ion-thumbnail>
            <ion-label>
              <h3>For Emma, Forever Ago</h3>
              <p>Bon Iver</p>
              <p>2008</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <img src="/assets/ironwine.jpeg" />
            </ion-thumbnail>
            <ion-label>
              <h3>Beast Epic</h3>
              <p>Iron & Wine</p>
              <p>2017</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <img src="/assets/porterrobinson.jpeg" />
            </ion-thumbnail>
            <ion-label>
              <h3>Worlds</h3>
              <p>Porter Robinson</p>
              <p>2014</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <img src="/assets/childishgambino.jpeg" />
            </ion-thumbnail>
            <ion-label>
              <h3>Worlds</h3>
              <p>Awaken, My Love!</p>
              <p>2016</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <img src="/assets/chancetherapper.jpeg" />
            </ion-thumbnail>
            <ion-label>
              <h3>Coloring Book</h3>
              <p>Chance the Rapper</p>
              <p>2016</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <img src="/assets/kimbra.jpeg" />
            </ion-thumbnail>
            <ion-label>
              <h3>Primal Heart</h3>
              <p>Kimbra</p>
              <p>2018</p>
            </ion-label>
          </ion-item>

        </ion-list>
        <ion-list id="skeleton">
          <ion-list-header>
            <ion-skeleton-text animated style={{ width: '80px' }}></ion-skeleton-text>
          </ion-list-header>
          <ion-item>
            <ion-thumbnail slot="start">
              <ion-skeleton-text></ion-skeleton-text>
            </ion-thumbnail>
            <ion-label>
              <h3>
                <ion-skeleton-text animated style={{ width: '80%' }}></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text animated style={{ width: '60%' }}></ion-skeleton-text>
              </p>
              <p>
                <ion-skeleton-text animated style={{ width: '30%' }}></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <ion-skeleton-text></ion-skeleton-text>
            </ion-thumbnail>
            <ion-label>
              <h3>
                <ion-skeleton-text animated style={{ width: '80%' }}></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text animated style={{ width: '60%' }}></ion-skeleton-text>
              </p>
              <p>
                <ion-skeleton-text animated style={{ width: '30%' }}></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <ion-skeleton-text></ion-skeleton-text>
            </ion-thumbnail>
            <ion-label>
              <h3>
                <ion-skeleton-text animated style={{ width: '80%' }}></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text animated style={{ width: '60%' }}></ion-skeleton-text>
              </p>
              <p>
                <ion-skeleton-text animated style={{ width: '30%' }}></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <ion-skeleton-text></ion-skeleton-text>
            </ion-thumbnail>
            <ion-label>
              <h3>
                <ion-skeleton-text animated style={{ width: '80%' }}></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text animated style={{ width: '60%' }} ></ion-skeleton-text>
              </p>
              <p>
                <ion-skeleton-text animated style={{ width: '30%' }} ></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <ion-skeleton-text></ion-skeleton-text>
            </ion-thumbnail>
            <ion-label>
              <h3>
                <ion-skeleton-text animated style={{ width: '80%' }}></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text animated style={{ width: '60%' }} ></ion-skeleton-text>
              </p>
              <p>
                <ion-skeleton-text animated style={{ width: '30%' }} ></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <ion-skeleton-text></ion-skeleton-text>
            </ion-thumbnail>
            <ion-label>
              <h3>
                <ion-skeleton-text animated style={{ width: '80%' }}></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text animated style={{ width: '60%' }} ></ion-skeleton-text>
              </p>
              <p>
                <ion-skeleton-text animated style={{ width: '30%' }} ></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <ion-skeleton-text></ion-skeleton-text>
            </ion-thumbnail>
            <ion-label>
              <h3>
                <ion-skeleton-text animated style={{ width: '80%' }}></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text animated style={{ width: '60%' }} ></ion-skeleton-text>
              </p>
              <p>
                <ion-skeleton-text animated style={{ width: '30%' }} ></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <ion-skeleton-text></ion-skeleton-text>
            </ion-thumbnail>
            <ion-label>
              <h3>
                <ion-skeleton-text animated style={{ width: '80%' }}></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text animated style={{ width: '60%' }} ></ion-skeleton-text>
              </p>
              <p>
                <ion-skeleton-text animated style={{ width: '30%' }} ></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>

        </ion-list>
      </ion-content>
    ];
  }
}
