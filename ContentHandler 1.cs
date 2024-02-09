using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor.Rendering;
using UnityEngine;
using UnityEngine.UI;
using static UnityEditorInternal.ReorderableList;

public class ContentHandler : MonoBehaviour
{
    public static ContentHandler instance;
    public static ContentHandler Instance
    {
        get
        {
            instance = FindObjectOfType<ContentHandler>();
            if (instance == null)
            {
                GameObject obj = new GameObject("ContentHandler");
                instance = obj.AddComponent<ContentHandler>();
            }
            return instance;
        }
    }
    public int _moduleindex;
    public int _moduleScreenindex;
    public ContentHandlerSO contentHandlerSO;
    private AudioClip _audio;
    public ControllerInteractionSO controllerInteractionSO;
    private GameObject canvas;
    GameObject tempCanvas;
    
    bool leftComplete, rightComplete;

    bool isInteractive;

    private void Awake()
    {
        if (instance == null)
        {
            instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }

    private void Update()
    {
        if (contentHandlerSO.module[_moduleindex].moduleScreens[_moduleScreenindex].slideNumber=="16")
        {
            if (ControllerInteraction.leftGripPressed_CH)
            {
                canvas.transform.GetChild(0).GetChild(1).GetChild(0).GetComponent<Image>().sprite = contentHandlerSO.successImage_S16;
                PlayScreenAudio(1);
                PlayScreenAudio(2);
                leftComplete = true;
            }
            if (ControllerInteraction.rightGripPressed_CH)
            {
                canvas.transform.GetChild(0).GetChild(2).GetChild(0).GetComponent<Image>().sprite = contentHandlerSO.successImage_S16;
                PlayScreenAudio(1);
                PlayScreenAudio(2);
                rightComplete = true;
            }
        }
    }

    private void Start()
    {
        ScreenInitialise();
    }

    public void ScreenInitialise()
    {
        //screenType = new ScreenType();
        _moduleindex = contentHandlerSO.CurrentModuleIndex;
        _moduleScreenindex = contentHandlerSO.module[_moduleindex].currentScreenIndex;
        isInteractive = contentHandlerSO.module[_moduleindex].moduleScreens[_moduleScreenindex].isInteractionNeeded;

        DisplayScreenUI();
        PlayScreenAudio(0);
    }

    public void DisplayScreenUI()
    {
        canvas = GetUIData(_moduleindex, _moduleScreenindex);
        tempCanvas = Instantiate(canvas) as GameObject;

        tempCanvas.transform.position = contentHandlerSO.canvasTransform[_moduleScreenindex].transform.position;
        tempCanvas.transform.localScale = contentHandlerSO.canvasTransform[_moduleScreenindex].transform.localScale;
        tempCanvas.transform.eulerAngles = contentHandlerSO.canvasTransform[_moduleScreenindex].transform.eulerAngles;
    }

    public void PlayScreenAudio(int audioIndex)
    {
        _audio = contentHandlerSO.module[_moduleindex].moduleScreens[_moduleScreenindex].audioclip[audioIndex];
        AudioManager.instance.PlayAudio(_audio);
        AudioManager.instance.onAudioFinishedCallback += onAudioFinishedCallback;
    }

    public GameObject GetUIData(int _moduleIndex, int _screenIndex)
    {
        canvas = contentHandlerSO.module[_moduleIndex].moduleScreens[_screenIndex].canvasUI;
        return canvas;
    }

    void onAudioFinishedCallback()
    {
        OnScreenFinish(isInteractive);
    }

    void OnScreenFinish(bool isInteractive)
    {
        if (_moduleScreenindex == contentHandlerSO.module[_moduleindex].moduleScreens.Length - 1)
        {
            if (isInteractive)
            {
                switch (contentHandlerSO.module[_moduleindex].moduleScreens[_moduleScreenindex].interactiontype)
                {
                    case InteractionType.Default:

                        break;
                    case InteractionType.None:

                        break;
                    case InteractionType.GripInteractor:
                        if(leftComplete && rightComplete)
                        {
                            Invoke(nameof(HideScreenUI), 2);
                            _moduleScreenindex++;
                            DisplayScreenUI();
                            PlayScreenAudio(0);
                        }
                        break;
                    case InteractionType.TriggerInteractor:
                        
                        break;
                    case InteractionType.UIInteraction:
                        //Action to be performed on UIInteractionElement Script
                        break;
                    default:
                        break;
                }
            }
            else
            {
                Invoke(nameof(HideScreenUI), 2);
                _moduleScreenindex++;
                DisplayScreenUI();
                PlayScreenAudio(0);
            }            
        }
        else
        {
            _moduleindex++;
            _moduleScreenindex = 0;

            Invoke(nameof(HideScreenUI), 2);
            DisplayScreenUI();
            PlayScreenAudio(0);
        }
    }

    public void HideScreenUI()
    {
        tempCanvas.gameObject.SetActive(false);
    }
}


